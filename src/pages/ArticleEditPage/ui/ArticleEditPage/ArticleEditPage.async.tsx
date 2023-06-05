import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // DO NOT DO THIS IN REAL CASE!
    setTimeout(() => resolve(import('./ArticleEditPage')), 400);
}));
