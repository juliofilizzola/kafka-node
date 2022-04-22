import { consumerREADServices } from '@modules/consumer/service/consumerREADServices';
import { KafkaMessage } from 'kafkajs';
import { container } from 'tsyringe';

interface loadConsumer {
  message: KafkaMessage;
  log: string;
  topic: string;
}

const loadConsumer = ({ log, message, topic }: loadConsumer): void => {
  console.log(log);
  const msgService = container.resolve(consumerREADServices);
  const msg = message;
  msgService.index({ msg, topic });
};

export default loadConsumer;
