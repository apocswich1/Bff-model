import axios from "axios";
import { CustomerRisk } from "src/domain/entities/segment/CustomerRisk";
import ICustomerRiskRepository from "src/domain/ports/segment/ICustomerRiskRepository";


export default class CustomerRiskRepository implements ICustomerRiskRepository {
    async getCustomerRisk(rut: string, digitoVerificador:string): Promise<CustomerRisk> {
        const { data: responseInfo } = await axios.get(`http://10.191.104.168:3000/getcustomerrisksegmentbyid?clientId=${rut}${digitoVerificador}`);
        return responseInfo;
    }

   

}