import { Column, Entity, OneToMany } from "typeorm";
import { BaseModel } from "./base.model";
import { Settings } from "./settings.model";

@Entity('education_levels')
export class EducationLevel extends BaseModel {

    @Column({ nullable: false })
    name: string;

    @OneToMany(() => Settings, settings => settings.educationLevel)
    settings: Settings[];
}