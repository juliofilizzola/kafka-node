import kafka from '../kafka-setup';

const producer = kafka.producer()
const consumerService = async (): Promise<void> => {
  await producer.connect()
  await producer.send({
    topic: 'test-topic',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
  
  await producer.disconnect()
}

export default consumerService;