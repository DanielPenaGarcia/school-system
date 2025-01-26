export interface CreateSchoolDTO {
    personalInformation: PersonalInformation;
    schoolInformation: SchoolInformation;
}

export interface PersonalInformation {
    names: string;
    lastNames: string;
    bornDate: Date;
    email: string;
    phoneNumber: string;
}

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

export interface EducationalLevel {
    id: string;
    name: string;
}