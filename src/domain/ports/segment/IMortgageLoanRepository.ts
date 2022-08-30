import { MortgageLoanSimulation } from "src/domain/entities/segment/MortgageLoanSimulation";

export default interface IMortgageLoanRepository {
    getMortgageLoan(channel:number, productOption:number, termOption:number): Promise<MortgageLoanSimulation>;
}