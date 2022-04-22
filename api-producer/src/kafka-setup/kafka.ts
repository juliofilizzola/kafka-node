import { Kafka, logLevel } from 'kafkajs';

export const kafka = new Kafka({
  clientId: 'kafka-studies',
  brokers: ['localhost:9092', 'localhost:9092'],
  logLevel: logLevel.WARN,
  retry: {
    initialRetryTime: 300,
    retries: 10,
  },
});

export const admin = kafka.admin();
