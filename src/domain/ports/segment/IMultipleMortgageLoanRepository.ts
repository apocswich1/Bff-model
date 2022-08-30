import { MultipleMortgageLoan } from "src/domain/entities/segment/MultipleMorgageLoan";
import { Rate } from "src/domain/entities/segment/Rate";

export default interface IMultipleMortgageLoanRepository {
    //getMultipleMortgageLoan(channel:number, productOption:number, termOption:number): Promise<MultipleMortgageLoan>;
    getMultipleMortgageLoan(finalRequest:MultipleMortgageLoan): Promise<Rate>;
}