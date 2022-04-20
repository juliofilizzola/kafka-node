import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Message')
class Message {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  message: string;

  @Column()
  key: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Message;
