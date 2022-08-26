import Account from 'src/domain/entities/Account';
import IAccountRepository from 'src/domain/ports/AccountRepository';
import { IRequestCreateAccountDTO } from 'src/domain/services/dto';
import { DomainServiceResult } from 'src/domain/services/types';

export default class CreateAccount {
  constructor(private readonly AccountRepository: IAccountRepository) {}

  public async execute(
    createAccountDTO: IRequestCreateAccountDTO,
  ): Promise<DomainServiceResult<Account>> {
    try {
      const account = new Account(createAccountDTO);

      const repoResult = await this.AccountRepository.save(account);

      return {
        status: 201,
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
