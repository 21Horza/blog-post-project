import { UserRole } from '../consts/consts';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
}

export interface UserSchema {
    authData?: User; // if undefined, then user is not auth
    _mounted: boolean;
}
