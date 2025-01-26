import { Column, Entity, OneToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Member } from './member.model';

@Entity('users')
export class User extends BaseModel {
  @Column({ unique: true, nullable: false, name: 'email' })
  email: string;

  @Column({ nullable: false, name: 'password' })
  password: string;

  @OneToOne(() => Member, member => member.user)
  member: Member;
}
