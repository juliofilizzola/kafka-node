import { Message } from 'kafkajs';
import { getCustomRepository } from 'typeorm';
import MessageRepository from '../typeorm/repositories/MessageRepository';

interface IConsumer {
  msg: Message;
  topic: string;
}
export class consumerREADServices {
  async index({ msg, topic }: IConsumer) {
    const msgRepo = getCustomRepository(MessageRepository);

    const data = {
      key: msg.key ? msg.key.toString('utf-8') : 'not key',
      value: msg.value ? msg.value.toString('utf-8') : 'not value',
      message: msg.headers?.meta && msg.headers.meta.toString('utf-8'),
      url: msg.headers?.url && msg.headers.url.toString('utf-8'),
      topic: topic,
    };

    // const msgSave = msgRepo.create(data);
    // await msgRepo.save(msgSave);
  }
}
