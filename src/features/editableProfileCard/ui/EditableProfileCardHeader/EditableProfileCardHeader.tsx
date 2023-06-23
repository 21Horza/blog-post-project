import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo((props: EditableProfileCardHeaderProps) => {
    const {
        className,
    } = props;

    const { t } = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const readonly = useSelector(getProfileReadOnly);
    const dispatch = useDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
                <div>
                    {readonly ? (
                        <Button
                            data-testid="EditableProfileCardHeader.EditButton"
                            theme={ButtonTheme.OUTLINE}
                            onClick={onEdit}
                        >
                            {t('Edit')}
                        </Button>
                    )
                        : (
                            <HStack gap="8">
                                <Button
                                    data-testid="EditableProfileCardHeader.CancelButton"
                                    theme={ButtonTheme.OUTLINE_RED}
                                    onClick={onCancelEdit}
                                >
                                    {t('Cancel')}
                                </Button>
                                <Button
                                    data-testid="EditableProfileCardHeader.SaveButton"
                                    theme={ButtonTheme.OUTLINE}
                                    onClick={onSave}
                                >
                                    {t('Save')}
                                </Button>
                            </HStack>
                        )}
                </div>
            )}
        </HStack>
    );
});
