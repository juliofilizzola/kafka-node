import { KafkaMessage } from 'kafkajs';

interface loadConsumer {
  message: KafkaMessage;
  log: string;
}

const loadConsumer = ({ log, message }: loadConsumer): void => {
  console.log(log);
  if (message.key !== null) {
    const result = Buffer.from(String(message.key), 'base64').toString('ascii');
    console.log(result);
  }
};

export default loadConsumer;
