import pino from 'pino';

export type LoggerOptions = pino.LoggerOptions & {
  context: string;
  trackingId: string;
};
export class Logger {
  logger: pino.Logger;

  constructor(options: LoggerOptions) {
    this.logger = pino(options);
  }
}
