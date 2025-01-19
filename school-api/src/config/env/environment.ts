import dotenv from 'dotenv';

dotenv.config({path: '.env'});

export const environment = {
    production: false,
    schoolServiceUrl: process.env.SCHOOL_SERVICE_URL,
    studentServiceUrl: process.env.USER_SERVICE_URL,
}