/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSafeSchema } from '../types/ScrollSchema';

const initialState: ScrollSafeSchema = {
    scroll: {},
};

export const scrollSafeSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction< { path: string; position: number} >) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: scrollSafeActions } = scrollSafeSlice;
export const { reducer: scrollSafeReducer } = scrollSafeSlice;
