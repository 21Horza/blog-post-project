import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Text } from '@/shared/ui/redesigned/Text';
import { Card } from '@/shared/ui/redesigned/Card';

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
  const dispatch = useAppDispatch();

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
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <Card border="partial" padding="24" max>
          <HStack max justify="between" className={classNames('', {}, [className])}>
            <Text title={t('Profile')} />
            {canEdit && (
            <div>
              {readonly ? (
                <Button
                  data-testid="EditableProfileCardHeader.EditButton"
                  onClick={onEdit}
                >
                  {t('Edit')}
                </Button>
              )
                : (
                  <HStack gap="8">
                    <Button
                      data-testid="EditableProfileCardHeader.CancelButton"
                      onClick={onCancelEdit}
                      color="error"
                    >
                      {t('Cancel')}
                    </Button>
                    <Button
                      data-testid="EditableProfileCardHeader.SaveButton"
                      onClick={onSave}
                      color="success"
                    >
                      {t('Save')}
                    </Button>
                  </HStack>
                )}
            </div>
            )}
          </HStack>
        </Card>
)}
      off={(
        <HStack max justify="between" className={classNames('', {}, [className])}>
          <TextDeprecated title={t('Profile')} />
          {canEdit && (
          <div>
            {readonly ? (
              <ButtonDeprecated
                data-testid="EditableProfileCardHeader.EditButton"
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
              >
                {t('Edit')}
              </ButtonDeprecated>
            )
              : (
                <HStack gap="8">
                  <ButtonDeprecated
                    data-testid="EditableProfileCardHeader.CancelButton"
                    theme={ButtonTheme.OUTLINE_RED}
                    onClick={onCancelEdit}
                  >
                    {t('Cancel')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    data-testid="EditableProfileCardHeader.SaveButton"
                    theme={ButtonTheme.OUTLINE}
                    onClick={onSave}
                  >
                    {t('Save')}
                  </ButtonDeprecated>
                </HStack>
              )}
          </div>
          )}
        </HStack>
)}
    />

  );
});
