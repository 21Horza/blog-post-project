import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
// TYPES CAN BE USED FROM THE UPPER LAYER AS AN EXCEPTION
import type { StateSchema, ThunkExtraArg, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore, StateSchema,
    ThunkExtraArg,
    ThunkConfig,
}; export type { AppDispatch };
