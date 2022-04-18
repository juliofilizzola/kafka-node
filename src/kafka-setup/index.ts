import { Kafka } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'kafka-studies',
  brokers: ['kafka1:9092', 'kafka2:9092'],
});

export default kafka;