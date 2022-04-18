import kafka from '../kafka-setup';

const consumer = kafka.consumer({ groupId: 'test-group' })
const consumerService = async (): Promise<void> => {

  await consumer.connect()
  await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value?.toString(),
      })
    },
  })
}

export default consumerService;