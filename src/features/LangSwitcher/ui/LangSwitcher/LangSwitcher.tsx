import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <Button
          className={classNames('', {}, [className])}
          variant="clear"
          onClick={toggle}
        >
          {/* i18next-extract-disable-line */}
          {t(short ? t('Short lang') : t('Language'))}
        </Button>
    )}
      off={(
        <ButtonDeprecated
          className={classNames('', {}, [className])}
          theme={ButtonTheme.CLEAR}
          onClick={toggle}
        >
          {/* i18next-extract-disable-line */}
          {t(short ? t('Short lang') : t('Language'))}
        </ButtonDeprecated>
    )}
    />
  );
});
