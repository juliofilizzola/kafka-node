import { IProducer } from "kafka/dtos";
import producerService from "../../../kafka/producer/producer";

class CreateProduce {
  async execute({ topic, message }:IProducer) {
    const Produce = producerService({ topic, message});
    return Produce;
  }
}

export default CreateProduce;