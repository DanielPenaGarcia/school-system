import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { User } from "./user.model";
import { Address } from "./address.model";
import { MemberRole } from "./member-role.model";
import { School } from "./school.model";

@Entity('members')
export class Member extends BaseModel {

    @Column({ nullable: false, name: 'names' })
    names: string;

    @Column({ nullable: false, name: 'last_names' })
    lastNames: string;

    @Column({ nullable: false, type: 'date', name: 'born_date' })
    bornDate: Date;

    @Column({ nullable: false, name: 'phone_number' })
    phoneNumber: string;

    @OneToOne(() => User, user => user.member, { cascade: ['insert']})
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToOne(() => Address, { cascade: ['insert']})
    @JoinColumn({ name: 'address_id' })
    address: Address;

    @OneToMany(() => MemberRole, memberRole => memberRole.member, { cascade: ['insert']})
    roles: MemberRole[];

    @OneToMany(() => School, school => school.member, { lazy: true })
    schools: School[];
}