import Account from 'src/domain/entities/Account';
import IAccountRepository from 'src/domain/ports/AccountRepository';
import IRepositoryMethodResult from 'src/domain/ports/RepositoryMethodResult';
import PostgresConnection from '../connection/PostgresConnection';
import { getRepository } from 'typeorm';

export default class AccountRepository implements IAccountRepository {
  constructor(private readonly postgresConnection: PostgresConnection) {}

  async save(account: Account): Promise<IRepositoryMethodResult<Account>> {
    await this.postgresConnection.getConnection();
    const accountRepository = await getRepository(Account);
    const data = await accountRepository.save(account);
    return {
      status: 200,
      data,
    };
  }
  async list(): Promise<IRepositoryMethodResult<Account[]>> {
    await this.postgresConnection.getConnection();
    const data = await getRepository(Account).find();
    return {
      status: 200,
      data,
    };
  }
}
