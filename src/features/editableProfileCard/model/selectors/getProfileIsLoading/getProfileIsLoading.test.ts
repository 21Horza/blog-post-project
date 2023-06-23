import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading', () => {
    test('should return true state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should return false state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: false,
            },
        };
        expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
    });
});
