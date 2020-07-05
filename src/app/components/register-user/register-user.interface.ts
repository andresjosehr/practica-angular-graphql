import { UserInterFace } from '../users/users.interface';

export interface RegisterResultInterface {
    status: boolean;
    message: string;
    user?: UserInterFace;
}

export interface RegisterUserInterface {
    name: string;
    lastname: string;
    email: string;
    password: string;
}