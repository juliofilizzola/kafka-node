import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('message')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  message: string;

  @Column()
  key: string;

  @Column()
  url: string;

  @Column()
  value: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
