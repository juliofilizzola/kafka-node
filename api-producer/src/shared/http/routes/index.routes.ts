import ProduceRouter from '../../../modules/producer/routes/produce.routes';
import { json, Router } from 'express';

const routesAPP = Router();
routesAPP.use(json());

routesAPP.use('/produce', ProduceRouter);

export default routesAPP;
