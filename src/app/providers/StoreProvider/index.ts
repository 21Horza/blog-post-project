import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore } from './config/store';
import type { StateSchema } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    StateSchema, // types can be used from the upper layer as an exception
};
