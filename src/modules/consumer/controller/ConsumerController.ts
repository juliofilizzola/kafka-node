import { container } from "tsyringe";
import ConsumerService from "../service/ConsumerService";

class ConsumerController {
  async execute() {
    const consumer = container.resolve(ConsumerService);
    const result = consumer.execute();
    return result;
  }
}

export default new ConsumerController();