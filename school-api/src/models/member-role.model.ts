import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from './base.model';
import { Role } from './enums/role.enum';
import { Member } from './member.model';

@Entity('member_roles')
export class MemberRole extends BaseModel {
  @Column({ nullable: false, type: 'enum', enum: Role })
  role: Role;

  @ManyToOne(() => Member, member => member.roles)
  @JoinColumn({ name: 'member_id' })
  member: Member;
}
