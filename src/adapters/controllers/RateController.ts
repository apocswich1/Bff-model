import ICustomerRepository from "src/domain/ports/segment/ICustomerRepository";
import ICustomerRiskRepository from "src/domain/ports/segment/ICustomerRiskRepository";
import { GetRate } from "src/domain/services/RateService";
import { ControllerMethodResult } from "./types";

export default class RateController {
  constructor(private readonly customerRiskRepository: ICustomerRiskRepository,
    private readonly customerRepository: ICustomerRepository) { }

  async getRate(rut:string, digitoVerificador:string): Promise<ControllerMethodResult> {
    const getRateService = new GetRate(this.customerRiskRepository, this.customerRepository);

    try {
      const result = await getRateService.execute(rut, digitoVerificador);

      return {
        status: 200, 
        result: {
          message: 'ok',
          data: result
        }
      };
    } catch (error) {
      console.log('error on the controller, list episodes');
      throw error; //should I add a custom error here?
    }    
  }

}