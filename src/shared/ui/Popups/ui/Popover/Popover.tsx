import { ReactNode, memo } from 'react';
import { Popover as HPopover } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Popover.module.scss';
import { mapDirectionClass } from '../../styles/consts';
import popupCls from '../../styles/Popup.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children: ReactNode;
}

export function Popover(props: PopoverProps) {
    const {
        className,
        trigger,
        children,
        direction = 'bottom right',
    } = props;
    const menuClasses = [mapDirectionClass[direction]];
    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.Popup])}>
            <HPopover.Button as="div" className={popupCls.trigger}>{trigger}</HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    );
}
