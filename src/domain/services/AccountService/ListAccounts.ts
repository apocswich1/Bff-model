import Account from 'src/domain/entities/Account';
import IAccountRepository from 'src/domain/ports/AccountRepository';
import { DomainServiceResult } from 'src/domain/services/types';

export default class ListAccounts {
  constructor(private readonly AccountRepository: IAccountRepository) {}

  public async execute(): Promise<DomainServiceResult<Account[]>> {
    try {
      const repoResult = await this.AccountRepository.list();

      return {
        status: 200,
        result: repoResult.data,
      };
    } catch (error: any) {
      return {
        status: 500,
        error: {
          message: error.message,
        },
      };
    }
  }
}
