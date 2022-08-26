import { ConnectionOptions, Connection, createConnection } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: Number(process.env.POSTGRES_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'postgres',
  database: process.env.POSTGRES_DB || 'postgres',
  entities: [],
  synchronize: true,
};

export default class PostgresConnection {
  private connection: Connection | undefined;

  public async getConnection(): Promise<Connection> {
    if (this.connection) {
      return this.connection;
    }
    this.connection = await createConnection(config);
    console.log(`Database connection success.
      Connection name: '${this.connection.name}'
      Database: '${this.connection.options.database}'`);
    return this.connection;
  }
}
