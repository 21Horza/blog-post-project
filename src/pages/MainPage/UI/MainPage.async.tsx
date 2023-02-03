import {lazy} from "react";

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // DO NOT DO THIS IN REAL CASE!
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));