export { getUserAuthData } from './model/selectors/getUserAuthData/getUserData';

export { getUserMounted } from './model/selectors/getUserMounted/getUserMounted';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/getUserRole/getUserRole';

export { userReducer, userActions } from './model/slice/userSlice';

export { UserRole } from './model/consts/consts';

export type { UserSchema, User } from './model/types/user';
