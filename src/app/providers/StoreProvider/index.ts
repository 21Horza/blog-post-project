import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type { StateSchema, ThunkExtraArg, ThunkConfig } from './config/StateSchema';

export {
    StoreProvider,
    createReduxStore,
    AppDispatch,
    StateSchema, // types can be used from the upper layer as an exception
    ThunkExtraArg,
    ThunkConfig,
};
