import producerService from "../../../kafka/producer/producer";

class CreateProduce {
  async execute() {
    const Produce = producerService();
  }
}

export default CreateProduce;