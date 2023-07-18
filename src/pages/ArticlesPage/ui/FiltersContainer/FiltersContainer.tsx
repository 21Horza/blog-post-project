import { memo } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
    className?: string;
}

export const FiltersContainer = memo((props: FiltersContainerProps) => {
  const {
    className,
  } = props;
  const {
    onChangeOrder,
    onChangeSearch,
    onChangeSort,
    onChangeType,
    type,
    search,
    order,
    sort,
  } = useArticleFilters();
  return (
    <ArticlesFilters
      search={search}
      type={type}
      order={order}
      sort={sort}
      onChangeOrder={onChangeOrder}
      onChangeSearch={onChangeSearch}
      onChangeSort={onChangeSort}
      onChangeType={onChangeType}
      className={className}
    />
  );
});
