import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

// rejectValue: string - expected value in error
export const fetchProfileData = createAsyncThunk<
    Profile,
    void,
    ThunkConfig<string>
>(
    'profile/fetchProfileData',
    async (_, thunkApi) => {
        const {
            extra, rejectWithValue,
        } = thunkApi;
        try {
            const response = await extra.api.get<Profile>('/profile');
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
