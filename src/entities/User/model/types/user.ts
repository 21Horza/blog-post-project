export interface User {
    id: string;
    username: string;
}

export interface UserSchema {
    authData?: User; // if undefined, then user is not auth
}
