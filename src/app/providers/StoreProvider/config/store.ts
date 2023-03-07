import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { ReducersMapObject } from 'redux';
import { StateSchema } from './StateSchema';

// create a function to reuse in stories and so on
export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };
    return configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__, // turn off devtools in production
        preloadedState: initialState,
    });
}
