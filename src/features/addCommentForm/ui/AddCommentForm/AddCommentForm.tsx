import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Button } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reduscers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo((props: AddCommentFormProps) => {
    const {
        className,
        onSendComment,
    } = props;
    const { t } = useTranslation();
    const text = useSelector(getAddCommentFormText);
    const error = useSelector(getAddCommentFormError);
    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onCommentTextChange('');
    }, [onCommentTextChange, onSendComment, text]);

    return (
        <DynamicModuleLoader reducers={reduscers}>
            <div className={classNames(cls.AddCommentForm, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Leave your comment')}
                    value={text}
                    onChange={onCommentTextChange}
                />
                <Button
                    onClick={onSendHandler}
                >
                    {t('Send')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
