import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox as ListBoxDeprecated } from '@/shared/ui/deprecated/Popups';
import { Country } from '../../model/types/country';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { ToggleFeatures } from '@/shared/lib/features';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    readonly?: boolean;
}

const options = [
  { value: Country.USA, content: Country.USA },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Germany, content: Country.Germany },
  { value: Country.China, content: Country.China },
];

export const CountrySelect = memo(({
  className, value, onChange, readonly,
}: CountrySelectProps) => {
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as Country);
  }, [onChange]);

  const listBoxProps = {
    direction: 'top right' as const,
    readonly,
    className,
    value,
    defaultValue: t('Set country'),
    label: t('Set country'),
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
