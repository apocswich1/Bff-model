import { Customer } from "src/domain/entities/segment/Customer";

export default interface ICustomerRepository {
    getCustomer(rut:string, digitoVerificador:string): Promise<Customer>;
}