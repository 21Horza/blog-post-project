import {
  ButtonHTMLAttributes, memo, ReactNode,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export type ButtonVariant = 'clear' | 'outline';

export type ButtonSize = 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    /**
     * Button theme. Responsible for visual (in frame, without styles, reverted color for project theme and so on)
     */
    variant?: ButtonVariant;
    /**
     * Flag that makes button squared
     */
    square?: boolean;
    /**
     * Button size according to design system
     */
    size?: ButtonSize;
    /**
     * Flag that responsible for button work
     */
    disabled?: boolean;
    /**
     * Button content
     */
    children?: ReactNode;
    /**
     * Makes button with full width
     */
    fullWidth?: boolean;
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    variant = 'outline',
    square,
    size = 'm',
    disabled,
    fullWidth,
    ...otherProps
  } = props;

  const mods: Mods = {
    [cls.square]: square,
    [cls.disabled]: disabled,
    [cls.fullWidth]: fullWidth,
  };

  return (
    <button
      type="button"
      className={classNames(cls.Button, mods, [className, cls[variant], cls[size]])}
      disabled={disabled}
            // eslint-disable-next-line react/jsx-props-no-spreading
      {...otherProps}
    >
      {children}
    </button>
  );
});
