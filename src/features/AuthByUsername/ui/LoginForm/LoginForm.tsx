import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Text as TextDeprecated, TextTheme } from '@/shared/ui/deprecated/Text';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Text } from '@/shared/ui/redesigned/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
    className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducerList = {
  loginForm: loginReducer,
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const forceUpdate = useForceUpdate();

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginActions.setUsername(value));
  }, [dispatch]);

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginActions.setPassword(value));
  }, [dispatch]);

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));
    if (result.meta.requestStatus === 'fulfilled') {
      onSuccess();
      forceUpdate();
    }
  }, [dispatch, username, password, onSuccess, forceUpdate]);

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <ToggleFeatures
        feature="isAppRedesigned"
        on={(
          <div>
            <VStack
              gap="16"
              className={classNames(cls.LoginForm, {}, [className])}
            >
              <Text title={t('Auth form')} />
              {error && <Text text={t('You entered wrong login or password')} variant="error" />}
              <Input
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Enter username')}
                onChange={onChangeUsername}
                value={username}
              />
              <Input
                type="text"
                className={cls.input}
                placeholder={t('Enter password')}
                onChange={onChangePassword}
                value={password}
              />
              <Button
                className={cls.loginBtn}
                onClick={onLoginClick}
                disabled={isLoading}
              >
                { t('Log in')}
              </Button>
            </VStack>
          </div>
        )}
        off={(
          <div className={classNames(cls.LoginForm, {}, [className])}>
            <TextDeprecated title={t('Auth form')} />
            {error && <TextDeprecated text={t('You entered wrong login or password')} theme={TextTheme.ERROR} />}
            <InputDeprecated
              autofocus
              type="text"
              className={cls.input}
              placeholder={t('Enter username')}
              onChange={onChangeUsername}
              value={username}
            />
            <InputDeprecated
              type="text"
              className={cls.input}
              placeholder={t('Enter password')}
              onChange={onChangePassword}
              value={password}
            />
            <ButtonDeprecated
              theme={ButtonTheme.OUTLINE}
              className={cls.loginBtn}
              onClick={onLoginClick}
              disabled={isLoading}
            >
              { t('Log in')}
            </ButtonDeprecated>
          </div>
        )}
      />
    </DynamicModuleLoader>
  );
});

export default LoginForm;
