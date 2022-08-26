import ApiAccountController from 'src/adapters/api/ApiAccountController';
import AccountController from 'src/adapters/controllers/AccountController';
import PostgresConnection from 'src/adapters/database/connection/PostgresConnection';
import AccountRepository from 'src/adapters/database/repositories/AccountRepository';
import { Router } from 'express';

const routes = Router();

// const apiAccountController = new ApiAccountController(
//   new AccountController(new AccountRepository(new PostgresConnection())),
// );

routes.get('/', async (req, res) => {
 // const response = await apiAccountController.list();
  res.json();
});

export default routes;
