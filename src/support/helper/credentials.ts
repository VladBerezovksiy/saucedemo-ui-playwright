import dotenv from 'dotenv';
import path from 'path';

if (!process.env.CI) {
    dotenv.config({ path: path.resolve(__dirname, '../../.env') });
}

export const credentials = {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
}

export const personalData = {
    firstName: process.env.FIRST_NAME,
    lastName: process.env.LAST_NAME,
    postalCode: process.env.POSTAL_CODE
}