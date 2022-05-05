import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateProduce from '../services/CreateProduceService';

class ProduceController {
  async execute(req: Request, res: Response) {
    const produce = container.resolve(CreateProduce);
    const data = req.body;
    produce.execute(data);
    return res.json({ value: true });
  }
}

export default new ProduceController();
