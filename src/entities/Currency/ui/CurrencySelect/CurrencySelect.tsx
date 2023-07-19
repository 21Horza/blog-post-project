import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Currency } from '../../model/types/currency';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
  { value: Currency.USD, content: Currency.USD },
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.RMB, content: Currency.RMB },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const {
    className,
    value,
    onChange,
    readonly,
  } = props;

  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  const listBoxProps = {
    direction: 'top right' as const,
    readonly,
    className,
    value,
    defaultValue: t('Set currency'),
    label: t('Set currency'),
    items: options,
    onChange: onChangeHandler,
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <ListBox {...listBoxProps} />
      }
      off={
        <ListBoxDeprecated {...listBoxProps} />
      }
    />
  );
});
