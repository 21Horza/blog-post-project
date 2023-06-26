import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
// TYPES CAN BE USED FROM THE UPPER LAYER AS AN EXCEPTION
import type {
    StateSchema,
    StateSchemaKey,
    ThunkConfig,
    ReduxStoreWithManager,
} from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
};

export type {
    AppDispatch,
    ThunkConfig,
    StateSchema,
    ReduxStoreWithManager,
    StateSchemaKey,
};
