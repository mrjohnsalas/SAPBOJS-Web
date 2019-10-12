import { Role } from './role';
import { Token } from './token';

export class User {
    firstName?: string;
    lastName?: string;
    fullName?: string;
    profilePhoto?: any[];
    email: string;
    password: string;
    token?: Token;
    roles?: Role[];
}
