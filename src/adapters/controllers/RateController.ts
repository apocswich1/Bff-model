import ICustomerRepository from "src/domain/ports/segment/ICustomerRepository";
import ICustomerRiskRepository from "src/domain/ports/segment/ICustomerRiskRepository";
import IMortgageLoanRepository from "src/domain/ports/segment/IMortgageLoanRepository";
import IMultipleMortgageLoanRepository from "src/domain/ports/segment/IMultipleMortgageLoanRepository";
import { GetRate } from "src/domain/services/RateService";
import { ControllerMethodResult } from "./types";

export default class RateController {
  constructor(private readonly customerRiskRepository: ICustomerRiskRepository,
    private readonly customerRepository: ICustomerRepository,
    private readonly mortgageLoanRepository: IMortgageLoanRepository,
    private readonly multipleMortgageLoanRepository: IMultipleMortgageLoanRepository,
     ) { }

  async getRate(
    rut:string, 
    digitoVerificador:string,
    channel:number,
    productOption:number,
    termOption:number,
    objectiveCredit:string,
    typeRate:string,
    ltv:number,
    term:number,
    creditAmount:number,
    firstProperty:boolean
    ): Promise<ControllerMethodResult> {
    const getRateService = new GetRate(
      this.customerRiskRepository, 
      this.customerRepository, 
      this.mortgageLoanRepository,
      this.multipleMortgageLoanRepository);

    try {
      const result = await getRateService.execute(
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