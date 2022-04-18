import { Router } from "express";
import ConsumerController from "../controller/ConsumerController";

const ConsumerRouter = Router();

ConsumerRouter.get('/', ConsumerController.execute);

export default ConsumerRouter;