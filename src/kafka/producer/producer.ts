import kafka from "../../kafka-setup"

const producer = kafka.producer()

async function run () {
  await producer.connect()
}
run().catch(console.error)

const producerService = async (): Promise<void> => {

  
  await producer.send({
    topic: 'kafka-studies',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })

  // await producer.disconnect();
};

export default producerService;