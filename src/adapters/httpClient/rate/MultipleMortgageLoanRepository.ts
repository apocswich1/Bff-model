import axios from "axios";
import { MultipleMortgageLoan } from "src/domain/entities/segment/MultipleMorgageLoan";
import { Rate } from "src/domain/entities/segment/Rate";
import IMultipleMortgageLoanRepository from "src/domain/ports/segment/IMultipleMortgageLoanRepository";


export default class MultipleMortgageLoanRepository implements IMultipleMortgageLoanRepository {
    async getMultipleMortgageLoan(lastRequest:MultipleMortgageLoan): Promise<Rate> {
        const { data: responseInfo } = await axios.post(`http://10.191.104.168:3008/retrivemultiplemortgageloaninterestratebyconditions/1/retrivemultiplemortgageloaninterestratebyconditions`, lastRequest);
        return responseInfo;
    }

   

}