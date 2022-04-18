import { container } from "tsyringe";
import CreateProduce from "../services/CreateProduceService";

class ProduceController {
  async execute() {
    const produce = container.resolve(CreateProduce);
    const result = produce.execute();
  }
}

export default new ProduceController();