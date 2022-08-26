import { RateDTO } from 'src/domain/services/CustomerRisk/dtos/RateDTO';
import { Path, GET, Errors, QueryParam } from 'typescript-rest';
import { Response } from 'typescript-rest-swagger';
import RateController from '../controllers/RateController';

@Path('rate')
export default class ApiRateController {
  constructor(private readonly rateController: RateController) { }

  @GET
  @Response(500)
  public async getRate(@QueryParam('rut') rut:string, @QueryParam('digitoVerificador') digitoVerificador:string): Promise<RateDTO> {
    try {
      const { result, status } = await this.rateController.getRate(rut, digitoVerificador);

      if (status !== 200) {
        throw new Errors.InternalServerError();
      }

      return result.data;
    } catch (error) {
      throw new Errors.InternalServerError();
    }

  }
}