import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { BaseModel } from "./base.model";
import { EducationLevel } from "./education-level.model";
import { School } from "./school.model";

@Entity('settings')
export class Settings extends BaseModel {

    @ManyToOne(() => School, school => school.settings)
    @JoinColumn({ name: 'school_id' })
    school: School;

    @ManyToOne(() => EducationLevel, educationLevel => educationLevel.settings, { cascade: ['insert']})
    @JoinColumn({ name: 'education_level_id' })
    educationLevel: EducationLevel;
}