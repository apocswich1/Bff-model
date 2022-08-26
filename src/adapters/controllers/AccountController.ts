import IAccountRepository from 'src/domain/ports/AccountRepository';
import {
  CreateAccount,
  ListAccounts,
} from 'src/domain/services/AccountService';
import { IRequestCreateAccountDTO } from 'src/domain/services/dto';
import { ControllerMethodResult } from './types';

export default class AccountController {
  constructor(private readonly AccountRepository: IAccountRepository) {}

  async listAccounts(): Promise<ControllerMethodResult> {
    const listAccountsService = new ListAccounts(this.AccountRepository);

    try {
      const listAccountsResponse = await listAccountsService.execute();

      return {
        status: listAccountsResponse.status,
        result: {
          message:
            listAccountsResponse.status === 200
              ? 'ok'
              : listAccountsResponse.error?.message,
          data:
            listAccountsResponse.status === 200
              ? listAccountsResponse.result
              : [],
        },
      };
    } catch (error: any) {
      return {
        status: 500,
        result: {
          message: error.message,
        },
      };
    }
  }

  async createAccount(
    createAccountDTO: IRequestCreateAccountDTO,
  ): Promise<ControllerMethodResult> {
    const createAccountService = new CreateAccount(this.AccountRepository);

    try {
      const createAccountResponse = await createAccountService.execute(
        createAccountDTO,
      );

      const response: ControllerMethodResult = {
        status: createAccountResponse.status,
        result: {
          message:
            createAccountResponse.status === 201
              ? 'ok'
              : createAccountResponse.error?.message,

          data: createAccountResponse.result || null,
        },
      };

      return response;
    } catch (error: any) {
      return {
        status: 500,
        result: {
          message: error.message,
        },
      };
    }
  }
}
