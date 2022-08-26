FROM node:14-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:14-alpine AS server
WORKDIR /app
COPY package* ./
# Create temporary package.json where version is set to 0.0.0
# – this way the cache of the build step won't be invalidated
# if only the version changed.
RUN ["node", "-e", "\
  const pkg = JSON.parse(fs.readFileSync('package.json', 'utf-8'));\
  const pkgLock = JSON.parse(fs.readFileSync('package-lock.json', 'utf-8'));\
  fs.writeFileSync('package.json', JSON.stringify({ ...pkg, version: '0.0.0' }));\
  fs.writeFileSync('package-lock.json', JSON.stringify({ ...pkgLock, version: '0.0.0' }));\
  "]
RUN npm install --production
COPY --from=builder ./app/public ./public
COPY --from=builder ./app/build ./build
EXPOSE 8000
CMD ["npm", "start"]
