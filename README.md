## File Structure
```
└── src
  ├── adapters
    └── api
      + Here everything that has a dependency on Express
    └── controllers
    └── database
      └── connection
      └── repositories
    └── Logger
      + masking
  ├── domain 
    └── entities
    └── exceptions
    └── ports
    └── services
      └── dto
    └── valueObjects
      + An object without its own identity, it would be like a date, an address...
  ├── commons
    + http
```

## Install dependencies
```
npm intall
```

## Launch test
```
npm run test
```

## Launch development
### With docker
```
docker-compose up
```
### Manual
```
npm run dev
```

