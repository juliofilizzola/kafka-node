import ConsumerRouter from '../../../modules/consumer/router/consumer.routes';
import { json, Router } from 'express';

const routesAPP = Router();
routesAPP.use(json());

routesAPP.use('/consumer', ConsumerRouter);

export default routesAPP;
