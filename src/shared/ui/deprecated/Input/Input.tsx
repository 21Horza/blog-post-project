import React, {
  InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

// types conflict in onChange (event vs value)
// omit allows take all props and exclude the ones that we don't need
type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'| 'readonly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void; // default onChange receives event, not a value
    autofocus?: boolean;
    readonly?: boolean;
}

/**
 * Outdated, use new components from redesigned folder
 * @deprecated
 */
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  // there should be React.EventHandler, but this is a weird custom handler
  const onSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const mods: Mods = {
    [cls.readonly]: readonly,
  };

  return (
    <div className={classNames(cls.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={cls.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={onChangeHandler}
          className={cls.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          readOnly={readonly}
                    // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
        {isCaretVisible && (
        <span
          className={cls.caret}
          style={{ left: `${caretPosition * 9}px` }}
        />
        )}
      </div>
    </div>
  );
});
