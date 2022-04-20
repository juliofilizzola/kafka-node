import { EntityRepository, Repository } from 'typeorm';
import Message from '../entities/Messages';

@EntityRepository(Message)
class MessageRepository extends Repository<Message> {
  public async findByName(name: string): Promise<Message | undefined> {
    const findName = await this.findOne({
      where: {
        name,
      },
    });

    return findName;
  }

  public async findById(id: string): Promise<Message | undefined> {
    const findId = await this.findOne({
      where: {
        id,
      },
    });
    console.log(findId, 'find id');

    return findId;
  }

  public async findEmail(email: string): Promise<Message | undefined> {
    const userEmail = await this.findOne({
      where: {
        email,
      },
    });

    return userEmail;
  }
}

export default MessageRepository;
