import { EducationalLevel } from "./educational-level";

export interface School {
    name: string;
    country: string;
    city: string;
    state: string;
    address: string;
    zipCode: string;
    educationalLevels: EducationalLevel[];
}