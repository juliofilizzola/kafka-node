import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ConsumerService from '../service/ConsumerService';

class ConsumerController {
  async execute(req: Request, res: Response) {
    const consumer = container.resolve(ConsumerService);
    const result = consumer.execute();
    return result;
  }
}

export default new ConsumerController();
