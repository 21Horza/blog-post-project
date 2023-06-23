import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
    test('should return true state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true,
            },
        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
    });
    test('should return false state', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: false,
            },
        };
        expect(getProfileReadOnly(state as StateSchema)).toEqual(false);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileReadOnly(state as StateSchema)).toEqual(undefined);
    });
});
