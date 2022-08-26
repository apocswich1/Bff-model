import { CustomerRisk } from "src/domain/entities/segment/CustomerRisk";

export default interface ICustomerRiskRepository {
    getCustomerRisk(rut:string, digitoVerificador:string): Promise<CustomerRisk>;
}