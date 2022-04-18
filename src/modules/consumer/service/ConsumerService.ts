import consumerService from "kafka/consumer/consumer";

class ConsumerService {
  async execute() {
    let service = await consumerService()
    return service
  }
}

export default ConsumerService;