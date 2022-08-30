import { MortgageLoanOptions } from "./MortgageLoanOptions";

export interface MultipleMortgageLoanOptions {
    clientId: string,
    clientSegment: string,
    riskSegment: string,
    morgageLoanPurpose: string,
    rateType: string,
    fundingPercentage: number,
    mortgageLoanTerm: number,
    mortgageLoanAmount: number,
    firstProperty: boolean
}