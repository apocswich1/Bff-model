import { RateDTO } from 'src/domain/services/CustomerRisk/dtos/RateDTO';
import { Path, GET, POST, Errors, QueryParam, FormParam } from 'typescript-rest';
import { Response } from 'typescript-rest-swagger';
import RateController from '../controllers/RateController';

@Path('rate')
export default class ApiRateController {
  constructor(private readonly rateController: RateController) { }

  /*@GET
  @Response(500)
  public async getRate2(
    @QueryParam('rut') rut:string, 
    @QueryParam('digitoVerificador') digitoVerificador:string): Promise<RateDTO> {
    try {
      const { result, status } = await this.rateController.getRate(rut, digitoVerificador);

      if (status !== 200) {
        throw new Errors.InternalServerError();
      }

      return result.data;
    } catch (error) {
      throw new Errors.InternalServerError();
    }

  }*/
  
  @POST
  @Response(500)
  public async getRate(
    @FormParam('rut') rut:string, 
    @FormParam('digitoVerificador') digitoVerificador:string,
    @FormParam('channel') channel:number, 
    @FormParam('productOption') productOption:number, 
    @FormParam('termOption') termOption:number,
    @FormParam('objectiveCredit') objectiveCredit: string,
    @FormParam('typeRate') typeRate: string,
    @FormParam('ltv') ltv: number,
    @FormParam('term') term: number,
    @FormParam('creditAmount') creditAmount: number,
    @FormParam('firstProperty') firstProperty: boolean
    ): Promise<any> {
      console.log(rut,'####', digitoVerificador)

    try {
      const { result, status } = await this.rateController.getRate(
        rut, 
        digitoVerificador, 
        channel, 
        productOption, 
        termOption,
        objectiveCredit,
        typeRate,
        ltv,
        term,
        creditAmount,
        firstProperty
        );

      if (status !== 200) {
        throw new Errors.InternalServerError();
      }

      return result.data;
    } catch (error) {
      throw new Errors.InternalServerError();
    }

  }
}