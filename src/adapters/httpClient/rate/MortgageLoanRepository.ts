import axios from "axios";
import { CustomerRisk } from "src/domain/entities/segment/CustomerRisk";
import { MortgageLoanSimulation } from "src/domain/entities/segment/MortgageLoanSimulation";
import ICustomerRiskRepository from "src/domain/ports/segment/ICustomerRiskRepository";
import IMortgageLoanRepository from "src/domain/ports/segment/IMortgageLoanRepository";


export default class MortgageLoanRepository implements IMortgageLoanRepository {
    async getMortgageLoan(channel: number, productOption: number, termOption: number): Promise<MortgageLoanSimulation> {
        const { data: responseInfo } = await axios.get(`http://10.191.104.168:3008/getmortageloansimulationsbyoptions?channel=${channel}&productOptions=${productOption}&termOptions=${termOption}`);
        return responseInfo;
    }

   

}