import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

describe('getProfileValidateErrors', () => {
    test('should return array of errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [
                    ValidateProfileError.INCORRECT_AGE,
                    ValidateProfileError.INCORRECT_COUNTRY,
                    ValidateProfileError.INCORRECT_USER_DATA,
                ],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
            ValidateProfileError.INCORRECT_USER_DATA,
        ]);
    });
    test('should return empty array of errors', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: [],
            },
        };
        expect(getProfileValidateErrors(state as StateSchema)).toEqual([]);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
    });
});
