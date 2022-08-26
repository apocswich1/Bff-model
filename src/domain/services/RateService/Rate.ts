import { RateDTO } from "src/domain/services/CustomerRisk/dtos/RateDTO";
import ICustomerRiskRepository from "src/domain/ports/segment/ICustomerRiskRepository";
import ICustomerRepository from "src/domain/ports/segment/ICustomerRepository";

export default class Rate {
  constructor(private readonly customerRiskRepository: ICustomerRiskRepository, 
    private readonly customerRepository: ICustomerRepository) { }

  public async execute(rut: string, digitoVerificador: string): Promise<RateDTO> {
    try {
      const customerRisk = await this.customerRiskRepository.getCustomerRisk(rut, digitoVerificador);
      const customer = await this.customerRepository.getCustomer(rut, digitoVerificador);
      // const result3 = await this.episodeRepository.getAll();
      // const result4 = await this.episodeRepository.getAll();

      /**
       * 
       */
      return {} as RateDTO; 
    } catch (error) {
      throw error; 
    }
  }
}