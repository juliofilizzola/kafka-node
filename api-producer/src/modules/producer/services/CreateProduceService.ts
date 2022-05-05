import { IProducer } from '@kafka/dtos';
import producerService from '@kafka/producer/producer';

class CreateProduce {
  async execute(data: IProducer[]) {
    const Produce = producerService(data);
    return Produce;
  }
}

export default CreateProduce;
