import { Router } from "express";
import ApiGetSegmentController from "src/adapters/api/ApiRateController";
import SegmentController from "src/adapters/controllers/RateController";
import CustomerRiskRepository from "src/adapters/httpClient/rate/CustomerRiskRepository";

const routes = Router();


const apiGetSegmentController = new ApiGetSegmentController(
  new SegmentController(new CustomerRiskRepository())
);


routes.get('/', async (req, res) => {
  const rut = req.query.rut as string;
  const digitoVerificador = req.query.digitoVerificador as string;
  //   const response = 'endpoint working fine, but missing real implementation';
  const response = await apiGetSegmentController.getRate(rut, digitoVerificador);  
  res.json(response);
});

export default routes;