import { lazy } from 'react';

export const ArticlesPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // DO NOT DO THIS IN REAL CASE!
    setTimeout(() => resolve(import('./ArticlesPage')), 1500);
}));
