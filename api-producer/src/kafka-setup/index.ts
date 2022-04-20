import { Kafka, logLevel } from 'kafkajs';

const kafka = new Kafka({
  clientId: 'kafka-studies',
  brokers: ['localhost:9092'],
  logLevel: logLevel.WARN,
  // ssl: true,
  // sasl: {
  //   mechanism: 'oauthbearer',
  //   oauthBearerProvider: async () => {
  //     // Use an unsecured token...
  //     const token = 'sajsaksj';

  //     // ...or, more realistically, grab the token from some OAuth endpoint

  //     return {
  //       value: token,
  //     };
  //   },
  // },
  retry: {
    initialRetryTime: 300,
    retries: 10,
  },
});

export default kafka;
