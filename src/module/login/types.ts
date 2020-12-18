import {ActionType} from "typesafe-actions";
import * as actions from './actions';

export type LoginAction = ActionType<typeof actions>;

export type Login = {
    user: string;
};