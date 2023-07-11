import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/user-spy.svg';

interface AppLogoProps {
    className?: string;
}

export const AppLogo = memo((props: AppLogoProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation();
  return (
    <HStack
      max
      justify="center"
      className={classNames(cls.appLogoWrapper, {}, [className])}
    >
      <div className={cls.gradientBig} />
      <div className={cls.gradientSmall} />
      <AppSvg className={cls.appLogo} />
    </HStack>
  );
});
