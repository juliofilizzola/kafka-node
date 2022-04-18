import { Router } from "express";
import produceController from "../controllers/produceController";

const ProduceRouter = Router();

ProduceRouter.post('/', produceController.execute);

export default ProduceRouter;