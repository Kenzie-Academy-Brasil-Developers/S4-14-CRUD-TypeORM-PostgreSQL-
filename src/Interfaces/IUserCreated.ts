import { IUser } from "./IUser";

export interface IUserCreated extends IUser {
    password?: string
}