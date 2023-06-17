export type {
    ScrollSafeSchema,
} from './model/types/ScrollSchema';

export {
    getScrollSafeByPath,
} from './model/selectors/scrollSafeSelector';

export {
    scrollSafeReducer,
    scrollSafeActions,
} from './model/slices/ScrollSafeSlice';
