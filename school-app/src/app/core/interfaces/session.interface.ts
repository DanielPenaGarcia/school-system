import { User } from "./user.interface";

export interface Session {
    action: 'login' | 'logout';
    user?: User;
}