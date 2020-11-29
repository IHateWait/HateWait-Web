import dotenv from 'dotenv';

dotenv.config();

interface Config {
    LOGIN_CHECK_URL: string;
}

export const config: Config = {
    LOGIN_CHECK_URL: process.env.LOGIN_CHECK_URL || 'http://hatewait-server.herokuapp.com/login/stores/',
};
