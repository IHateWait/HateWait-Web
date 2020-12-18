import { deprecated } from 'typesafe-actions';

const { createStandardAction } = deprecated;

export const LOG_IN = "login/LOG_IN";
export const LOG_OUT = "login/LOG_OUT";

export const logIn = createStandardAction(LOG_IN)<{
    user: string;
}>();

export const logOut = createStandardAction(LOG_OUT)();