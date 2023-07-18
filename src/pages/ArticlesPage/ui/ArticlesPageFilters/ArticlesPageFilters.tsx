import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';

import cls from './ArticlesPageFilters.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlesPageFiltersProps {
    className?: string;
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const {
    className,
  } = props;
  const { t } = useTranslation('article-details');
  const {
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType,
    onChangeView,
    type,
    search,
    order,
    sort,
    view,
  } = useArticleFilters();

  return (
    <div className={classNames(cls.ArticlesPageFilters, {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          order={order}
          sort={sort}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.search}>
        <Input
          placeholder={t('Search')}
          onChange={onChangeSearch}
          value={search}
        />
      </Card>
      <ArticleTypeTabs
        value={type}
        onChangeType={onChangeType}
        className={cls.tabs}
      />
    </div>
  );
});
