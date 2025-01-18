import { EducationalLevel } from "./educational-level.interface";

export interface SchoolInformation {
    name: string;
    city: string;
    state: string;
    country: string;
    street: string;
    neighborhood: string;
    zipCode: string;
    educationalLevel: EducationalLevel[];
}