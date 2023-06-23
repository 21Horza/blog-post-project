import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import CopyIcon from '@/shared/assets/icons/copy.svg';
import cls from './Code.module.scss';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';

interface CodeProps {
    className?: string;
    text: string;
}

export const Code = memo((props: CodeProps) => {
    const { className, text } = props;
    const copy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);
    return (
        <pre className={classNames(cls.Code, {}, [className])}>
            <Button onClick={copy} className={cls.copyBtn} theme={ButtonTheme.CLEAR}>
                <Icon Svg={CopyIcon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
});
