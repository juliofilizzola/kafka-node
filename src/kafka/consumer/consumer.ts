import kafka from '../../kafka-setup';

const consumerService = async (): Promise<void> => {
  const consumer = kafka.consumer({ groupId: 'test-group' })

  await consumer.connect()
  let s = await consumer.subscribe({ topic: 'kafka-studies', fromBeginning: true })
  
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      const log = `${topic}[${partition} | ${message.offset}] / ${message.timestamp}`
      console.log(`- ${log} ${message.key}#${message.value}`)      
    },
  });
}

export default consumerService;