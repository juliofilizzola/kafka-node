import { json, Router } from 'express';
import ConsumerRouter from 'modules/consumer/router/consumer.routes';
import ProduceRouter from '../../../modules/producer/routes/produce.routes';

const routesAPP = Router();
routesAPP.use(json());

routesAPP.use('/produce', ProduceRouter);
routesAPP.use('/consumer', ConsumerRouter);

export default routesAPP;
