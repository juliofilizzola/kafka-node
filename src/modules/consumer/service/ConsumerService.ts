import consumerService from 'src/kafka/consumer/consumer';

class ConsumerService {
  async execute() {
    const service = await consumerService();
    return service;
  }
}

export default ConsumerService;
