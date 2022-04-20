import { consumerREADServices } from '@modules/consumer/service/consumerREADServices';
import { KafkaMessage } from 'kafkajs';
import { container } from 'tsyringe';

interface loadConsumer {
  message: KafkaMessage;
  log: string;
}

const loadConsumer = ({ log, message }: loadConsumer): void => {
  console.log(log);
  const msgService = container.resolve(consumerREADServices);
  const msg = message;
  msgService.index(msg);
};

export default loadConsumer;
