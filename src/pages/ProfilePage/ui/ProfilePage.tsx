import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError, getProfileForm, getProfileIsLoading,
    getProfileReadOnly, getProfileValidateErrors, profileActions,
    ProfileCard, profileReducer, ValidateProfileError,
} from 'entities/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page/Page';
import { VStack } from 'shared/ui/Stack/VStack/VStack';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadOnly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const { id } = useParams<{ id: string }>();

    const validateErrorTranslations = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.INCORRECT_COUNTRY]: t('Incorrect country'),
        [ValidateProfileError.NO_DATA]: t('No data'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Incorrect user data'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
    };

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    const onChangeFirstName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ first: value || '' }));
    }, [dispatch]);

    const onChangeLastName = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <Page className={classNames('', {}, [className])}>
                <VStack max gap="16">
                    <ProfilePageHeader />
                    {validateErrors?.length && validateErrors.map((err) => (
                        <Text
                            key={err}
                            theme={TextTheme.ERROR}
                            text={validateErrorTranslations[err]}
                        />
                    ))}
                    <ProfileCard
                        onChangeFirstName={onChangeFirstName}
                        onChangeLastName={onChangeLastName}
                        onChangeAge={onChangeAge}
                        onChangeCity={onChangeCity}
                        onChangeUsername={onChangeUsername}
                        onChangeAvatar={onChangeAvatar}
                        onChangeCurrency={onChangeCurrency}
                        onChangeCountry={onChangeCountry}
                        data={formData}
                        isLoading={isLoading}
                        error={error}
                        readonly={readonly}
                    />
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
