import { kafka, admin } from '@kafka-setup/kafka';
import { IProducer } from '@kafka/dtos';

const producer = kafka.producer();

async function run() {
  await producer.connect();
  await admin.connect();
}
run().catch(console.error);

const producerService = async (data: IProducer[]): Promise<void> => {
  const list = await admin.listTopics();
  console.log(list);

  try {
    data.map(async ({ topic, message }) => {
      const verifyTopic = list.some((data) => data === topic);
      console.log(verifyTopic);

      if (!verifyTopic) {
        await admin.createTopics({
          topics: [{ topic }],
        });
      }

      console.log({ topic, message });
      await producer.send({
        topic,
        messages: message,
      });
    });
    // await admin.createTopics({
    //   topics: [{ topic }],
    // });
  } catch (error: any) {
    console.log('sad -- ', error);
  }

  // const topicMessages = [
  //   {
  //     topic: 'topic-a',
  //     messages: [{ key: 'key', value: 'hello topic-a' }],
  //   },
  //   {
  //     topic: 'topic-b',
  //     messages: [{ key: 'key', value: 'hello topic-b' }],
  //   },
  //   {
  //     topic: 'topic-c',
  //     messages: [
  //       {
  //         key: 'key',
  //         value: 'hello topic-c',
  //         headers: {
  //           'correlation-id': '2bfb68bb-893a-423b-a7fa-7b568cad5b67',
  //         },
  //       },
  //     ],
  //   },
  // ];

  // await producer.send({ topicMessages });

  // await producer.disconnect();
};

export default producerService;
