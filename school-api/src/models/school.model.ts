import { Column, Entity, ManyToOne, OneToMany } from "typeorm";
import { BaseModel } from "./base.model";
import { SchoolAddress } from "./school-address.model";
import { Settings } from "./settings.model";
import { Member } from "./member.model";

@Entity('schools')
export class School extends BaseModel {

    @Column({ nullable: false, name: 'name' })
    name: string;

    @OneToMany(() => SchoolAddress, schoolAddress => schoolAddress.school, { cascade: ['insert']})
    schoolAddresses: SchoolAddress[];

    @OneToMany(() => Settings, settings => settings.school, { cascade: ['insert']})
    settings: Settings[];

    @ManyToOne(() => Member, member => member.schools, { cascade: ['insert']})
    member: Member;
}