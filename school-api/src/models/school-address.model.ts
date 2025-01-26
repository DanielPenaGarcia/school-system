import { Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { Address } from "./address.model";
import { BaseModel } from "./base.model";
import { School } from "./school.model";

@Entity('school_addresses')
export class SchoolAddress extends BaseModel {

    @ManyToOne(() => School, school => school.schoolAddresses)
    school: School;

    @OneToOne(() => Address, { cascade: ['insert']})
    @JoinColumn({ name: 'address_id' })
    address: Address;
}