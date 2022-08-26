import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export interface IAccountProperties {
  id?: string;
  title: string;
}
@Entity()
export default class Account {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  constructor({ title }: IAccountProperties) {
    this.title = title;

    if (title.length < 5) {
      throw new Error('Title is less than 5');
    }
  }
}
