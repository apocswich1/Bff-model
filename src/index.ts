import express, { Application, NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';

import { accountRoutes, rateRoutes } from './routes';
// import uuid from 'uuid';

import {
  dbEnabled,
  deployment,
  deployments,
  port,
  serviceType,
  serviceTypes,
  context,
} from './config';

captureErrors();

const app: Application = express();
app.use((req: Request, res: Response, next: NextFunction) => {
  // const trackingId = uuid.v4();
  // req.app.locals.logger = new Logger({
  //   context: context || 'empty',
  //   trackingId: '',
  // });
  next();
});
app.use(express.json());
if (deployment === deployments.development) {
  app.use(morgan('tiny'));
}
app.use(express.static('public'));

app.use(
  '/swagger',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  }),
);


app.use('/rate', rateRoutes);
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new Error('Not Found');
  // err.status = 404;
  next(err);
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, req: Request, res: Response, _next: NextFunction) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {},
  });
});

function captureErrors() {
  process.on('uncaughtException', function (err) {
    console.error(
      new Date().toUTCString() + ' uncaughtException:',
      err.message,
    );
    if (deployment === deployments.development) {
      console.error(err.stack);
    }
    process.exit(1);
  });
}

run();

async function run() {
  if (serviceType === serviceTypes.BFF && dbEnabled) {
    throw new Error('A BFF microservice cannot have a database');
  }

  launchServer();
}

function launchServer() {
  app.listen(port, () => {
    console.log('Server is running on port', port);
  });
}
