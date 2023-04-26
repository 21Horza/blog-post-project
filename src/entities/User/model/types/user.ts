export interface User {
    id: string;
    username: string;
    avatar?: string;
}

export interface UserSchema {
    authData?: User; // if undefined, then user is not auth
    _mounted: boolean;
}
