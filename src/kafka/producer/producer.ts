import { IProducer } from '../dtos';
import kafka from '../../kafka-setup';

const producer = kafka.producer();

async function run() {
  await producer.connect();
}
run().catch(console.error);

const producerService = async ({
  topic,
  message,
}: IProducer): Promise<void> => {
  await producer.send({
    topic,
    messages: message,
  });

  await producer.disconnect();
};

export default producerService;
