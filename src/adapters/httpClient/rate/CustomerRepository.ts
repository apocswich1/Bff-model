import axios from "axios";
import { CustomerRisk } from "src/domain/entities/segment/CustomerRisk";
import ICustomerRepository from "src/domain/ports/segment/ICustomerRepository";


export default class CustomerRepository implements ICustomerRepository {
    async getCustomer(rut: string, digitoVerificador:string): Promise<CustomerRisk> {
        const { data: responseInfo } = await axios.get(`/getcustomerdatabyid?clientId=${rut}${digitoVerificador}&documentType=01&altamiraUser=`);
        return responseInfo;
    }

   

}