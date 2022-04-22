import kafka from '@kafka-setup/kafka';
import { EachMessagePayload } from 'kafkajs';
import loadConsumer from './loadConsumer';

const consumerService = async (): Promise<void> => {
  const consumer = kafka.consumer({ groupId: 'kafka-studies' });

  await consumer.connect();
  await consumer.subscribe({
    topic: 'kafka-studies2',
    fromBeginning: true,
  });

  await consumer.subscribe({
    topic: 'kafka-studies1',
    fromBeginning: true,
  });
  await consumer.subscribe({
    topic: 'kafka-studies3',
    fromBeginning: true,
  });

  await consumer.subscribe({
    topic: 'Pix-08',
    fromBeginning: true,
  });

  await consumer.subscribe({
    topic: 'Pix-06783',
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }: EachMessagePayload) => {
      const log = `${topic}[${partition} | ${
        message.offset
      }] / ${topic} - ${Date.now()}`;
      loadConsumer({ log, message, topic });
    },
  });
};

export default consumerService;
