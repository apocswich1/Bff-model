const isTest = process.env.NODE_ENV === 'test';
const envPath = isTest ? './test.env' : './dev.env';
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: envPath });
import * as env from 'env-var';
import pino from 'pino';

const deployments = {
  development: 'development',
  production: 'production',
  test: 'test',
};
const serviceTypes = {
  BFF: 'BFF',
  BCL: 'BCL',
};

process.env.NODE_ENV = process.env.NODE_ENV || deployments.development;

const deployment: string = env
  .get('NODE_ENV')
  .required()
  .asEnum(Object.values(deployments));

const serviceType: string = env
  .get('SERVICE_TYPE')
  .required()
  .asEnum(Object.values(serviceTypes));

const dbEnabled: boolean = process.env.DB_ENABLED === 'true' ? true : false;

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 8000;

const postgres = {
  port: process.env.POSTGRES_PORT ? parseInt(process.env.POSTGRES_PORT) : 5432,
  host: process.env.POSTGRES_HOST || 'localhost',
  user: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  db: process.env.POSTGRES_DB || 'postgres',
};
const context: string = process.env.CONTEXT || '';

export {
  deployment,
  deployments,
  port,
  postgres,
  serviceType,
  serviceTypes,
  dbEnabled,
  context,
};
