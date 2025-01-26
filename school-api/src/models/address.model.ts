import { Column, Entity } from "typeorm";
import { BaseModel } from "./base.model";

@Entity('addresses')
export class Address extends BaseModel {

    @Column({ nullable: false, name: 'street' })
    street: string;

    @Column({ nullable: false, name: 'city' })
    city: string;

    @Column({ nullable: false, name: 'state' })
    state: string;

    @Column({ nullable: false, name: 'country' })
    country: string;

    @Column({ nullable: false, name: 'zip_code' })
    zipCode: string;
}