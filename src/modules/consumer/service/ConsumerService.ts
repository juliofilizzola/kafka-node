import consumerService from "kafka/consumer/consumer";


class ConsumerService {
  async execute() {
    const service = consumerService()
    return service
  }
}

export default ConsumerService;