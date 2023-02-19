import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // DO NOT DO THIS IN REAL CASE!
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
