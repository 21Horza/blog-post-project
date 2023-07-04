import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ValidateProfileError } from '../consts/consts';

const data = {
  username: 'admin',
  age: 25,
  country: Country.China,
  first: 'Horza',
  lastname: 'Go',
  city: 'Shanghai',
  currency: Currency.RMB,
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(
      profileReducer(
                state as ProfileSchema,
                profileActions.setReadOnly(true),
      ),
    ).toEqual({ readonly: true });
  });

  test('test cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: '' },
    };

    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit()),
    ).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data,
    });
  });

  test('test update profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: 'Horza' },
    };

    expect(
      profileReducer(
                state as ProfileSchema,
                profileActions.updateProfile({
                  username: 'Horza',
                }),
      ),
    ).toEqual({
      form: { username: 'Horza' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    };

    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fullfiled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(
      profileReducer(
                state as ProfileSchema,
                updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
