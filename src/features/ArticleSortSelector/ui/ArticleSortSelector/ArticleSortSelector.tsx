import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/deprecated/Select';
import { SortOrder } from '@/shared/types/sort';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface ArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className,
    onChangeSort,
    onChangeOrder,
    sort,
    order,
  } = props;

  const { t } = useTranslation('article-details');

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
    {
      value: 'asc',
      content: t('ascending order'),
    },
    {
      value: 'desc',
      content: t('descending order'),
    },
  ], [t]);

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
    {
      value: ArticleSortField.CREATED_AT,
      content: t('issue date'),
    },
    {
      value: ArticleSortField.TITLE,
      content: t('title'),
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('views'),
    },
  ], [t]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={(
        <div className={classNames(cls.ArticleSortSelectorRedesigned, {}, [className])}>
          <VStack gap="8">
            <Text text={t('Sort by:')} />
            <ListBox
              value={sort}
              onChange={onChangeSort}
              items={sortFieldOptions}
            />
            <ListBox
              value={order}
              onChange={onChangeOrder}
              items={orderOptions}
            />
          </VStack>
        </div>
)}
      off={(
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
          <Select
            value={sort}
            onChange={onChangeSort}
            options={sortFieldOptions}
            label={t('Sort by:')}
          />
          <Select
            className={cls.order}
            value={order}
            onChange={onChangeOrder}
            options={orderOptions}
            label={t('Order by:')}
          />
        </div>
    )}
    />

  );
});
