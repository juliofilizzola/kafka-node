import { KafkaMessage } from 'kafkajs';

interface loadConsumer {
  message: KafkaMessage;
  log: string;
}

const loadConsumer = ({ log, message }: loadConsumer): void => {
  console.log(log);
  if (message.key !== null) {
    const result = message.key.toString('ascii');
    const value = message.value?.toString('ascii');
    const headers =
      message.headers?.url && message.headers?.url.toString('ascii');
    const meta =
      message.headers?.meta && message.headers?.meta.toString('utf-8');
    console.log(value);
    console.log(headers);
    console.log(meta);

    console.log(result);
  }
};

export default loadConsumer;
