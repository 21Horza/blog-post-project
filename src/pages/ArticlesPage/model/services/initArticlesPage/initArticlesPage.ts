import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { getArticlesPageInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    URLSearchParams,
    ThunkConfig<string>
>('articlesPage/initArticlesPage', async (searchParams, thunkApi) => {
  const { dispatch, getState } = thunkApi;
  const inited = getArticlesPageInited(getState());

  if (!inited) {
    const sortFromUrl = searchParams.get('sort');
    const orderFromUrl = searchParams.get('order');
    const searchFromUrl = searchParams.get('search');

    if (orderFromUrl) {
      searchParams.forEach((value, key) => {
        // eslint-disable-next-line default-case
        switch (key) {
          case 'order':
            dispatch(
              articlesPageActions.setOrder(value as SortOrder),
            );
            break;
          case 'sort':
            dispatch(
              articlesPageActions.setSort(
                                value as ArticleSortField,
              ),
            );
            break;
          case 'search':
            dispatch(articlesPageActions.setSearch(value));
            break;
        }
      });
    }
    dispatch(fetchArticlesList({}));
  }
});
