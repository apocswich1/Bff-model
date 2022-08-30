import { RateDTO } from "src/domain/services/CustomerRisk/dtos/RateDTO";
import ICustomerRiskRepository from "src/domain/ports/segment/ICustomerRiskRepository";
import ICustomerRepository from "src/domain/ports/segment/ICustomerRepository";
import IMorgageLoanRepository from "src/domain/ports/segment/IMortgageLoanRepository";
import IMultipleMortgageLoanRepository from "src/domain/ports/segment/IMultipleMortgageLoanRepository";
import { MultipleMortgageLoan } from "src/domain/entities/segment/MultipleMorgageLoan";

export default class Rate {
  constructor(private readonly customerRiskRepository: ICustomerRiskRepository, 
    private readonly customerRepository: ICustomerRepository,
    private readonly morgageLoanRepository: IMorgageLoanRepository,
    private readonly multipleMortgageLoanRepository: IMultipleMortgageLoanRepository
    ) { }

  public async execute(
     rut: string,
     digitoVerificador: string,
     channel: number,
     productOption: number,
     termOption: number,
     objectiveCredit:string,
     typeRate:string,
     ltv:number,
     term:number,
     creditAmount:number,
     firstProperty:boolean): Promise<any> {
     /* console.log( rut,
        digitoVerificador,
        channel,
        productOption,
        termOption,
        objectiveCredit,
        typeRate,
        ltv,
        term,
        creditAmount,
        firstProperty)*/
    try {
      const customerRisk = await this.customerRiskRepository.getCustomerRisk(rut, digitoVerificador);
      const customer = await this.customerRepository.getCustomer(rut, digitoVerificador);
      const morgageLoan = await this.morgageLoanRepository.getMortgageLoan(channel, productOption, termOption);

      let options:any = []
      morgageLoan.simulationOption?.forEach(item => {
        options.push({
          clientId: rut,
          clientSegment: customer.segment,
          riskSegment: customerRisk.segment,
          morgageLoanPurpose: objectiveCredit,
          rateType: item.productId,
          fundingPercentage: ltv,
          mortgageLoanTerm: item.initialTerm,
          mortgageLoanAmount: creditAmount,
          firstProperty: firstProperty
        })
      })

      const finalRequest: MultipleMortgageLoan = {
        customerSimulationConditions: options
      }

      const multipleMorgageLoanRate = await this.multipleMortgageLoanRepository.getMultipleMortgageLoan(finalRequest);

      const response = {
        clientId: rut,
        objectiveCredit: objectiveCredit,
        typeRate: typeRate,
        rate: multipleMorgageLoanRate
      }
      // const result3 = await this.episodeRepository.getAll();
      // const result4 = await this.episodeRepository.getAll();

      /**
       * 
       */
      //return {} as RateDTO; 
      return response;
    } catch (error) {
      throw error; 
    }
  }
}