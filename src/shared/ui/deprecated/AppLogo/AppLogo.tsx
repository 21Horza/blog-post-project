import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLogo.module.scss';
import { HStack } from '../Stack';
import AppSvg from '@/shared/assets/icons/app-image.svg';

interface AppLogoProps {
    className?: string;
}

/**
 * Outdated, use new components from redesigned folder
 * @deprecated
 */
export const AppLogo = memo((props: AppLogoProps) => {
  const {
    className,
  } = props;
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
