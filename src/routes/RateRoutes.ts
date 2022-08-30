import { Router } from "express";
import ApiRateController from "src/adapters/api/ApiRateController";
import RateController from "src/adapters/controllers/RateController";
import CustomerRepository from "src/adapters/httpClient/rate/CustomerRepository";
import CustomerRiskRepository from "src/adapters/httpClient/rate/CustomerRiskRepository";
import MortgageLoanRepository from "src/adapters/httpClient/rate/MortgageLoanRepository";
import MultipleMortgageLoanRepository from "src/adapters/httpClient/rate/MultipleMortgageLoanRepository";

const routes = Router();


const apiRateController = new ApiRateController(
  new RateController(
    new CustomerRiskRepository(), 
    new CustomerRepository(), 
    new MortgageLoanRepository(), 
    new MultipleMortgageLoanRepository()
  )
);


/*routes.get('/', async (req, res) => {
  const rut = req.query.rut as string;
  const digitoVerificador = req.query.digitoVerificador as string;
  //   const response = 'endpoint working fine, but missing real implementation';
  const response = await apiRateController.getRate(rut, digitoVerificador);  
  res.json(response);
});*/

routes.post('/', async (req, res) => {
  const rut = req.body.rut as string;
  const digitoVerificador = req.body.digitoVerificador as string;
  const channel = req.body.channel as number;
  const productOption = req.body.productOption as number;
  const termOption = req.body.termOption as number;
  const objectiveCredit = req.body.objectiveCredit as string;
  const typeRate = req.body.typeRate as string;
  const ltv = req.body.ltv as number;
  const term = req.body.term as number;
  const creditAmount = req.body.creditAmount as number;
  const firstProperty = req.body.firstProperty as boolean;

  //   const response = 'endpoint working fine, but missing real implementation';
  const response = await apiRateController.getRate(
    rut, 
    digitoVerificador, 
    channel, 
    productOption, 
    termOption,
    objectiveCredit,
    typeRate,
    ltv,
    term,
    creditAmount,
    firstProperty);  
  res.json(response);
});

export default routes;