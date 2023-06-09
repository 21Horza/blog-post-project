import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Country } from '../../model/types/country';

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

    return (
        <ListBox
            direction="top"
            readonly={readonly}
            className={className}
            value={value}
            defaultValue={t('Set country')}
            label={t('Set country')}
            items={options}
            onChange={onChangeHandler}
        />
    );
});
