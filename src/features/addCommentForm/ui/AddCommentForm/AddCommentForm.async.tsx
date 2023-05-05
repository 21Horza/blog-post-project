import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // DO NOT DO THIS IN REAL CASE!
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));
