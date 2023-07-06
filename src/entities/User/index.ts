export { getUserAuthData } from './model/selectors/getUserAuthData/getUserData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
  isUserAdmin,
  isUserManager,
  getUserRoles,
} from './model/selectors/getUserRole/getUserRole';

export { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';
export { UserRole } from './model/consts/consts';
export { saveJsonSettings } from './model/services/saveJsonSettings';
export { useJsonSettings } from './model/selectors/jsonSettings/jsonSettings';
export { initAuthData } from './model/services/initAuthData';
