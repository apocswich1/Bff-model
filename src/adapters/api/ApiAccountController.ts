import { Path, GET, Errors } from 'typescript-rest';
import { Response } from 'typescript-rest-swagger';
import AccountController from 'src/adapters/controllers/AccountController';
import { ControllerMethodResult } from '../controllers/types';
import Account from 'src/domain/entities/Account';
import TarifadoController from '../controllers/TarifadoController';

@Path('accounts')
export default class ApiAccountController {
  constructor(private readonly accountController: AccountController,
    private readonly tarifadoController: TarifadoController) {}

  @GET
  @Response(500)
  public async list(): Promise<Account[]> {
    try {
      const { result, status } = await this.accountController.listAccounts();
      if (status !== 200) {
        throw new Errors.InternalServerError();
      }
      return result.data || [];
    } catch (error) {
      throw new Errors.InternalServerError();
    }
  }


}
