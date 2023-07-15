import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

/**
 * Outdated, use new components from redesigned folder
 * @deprecated
 */
export const Portal = (props: PortalProps) => {
  const {
    children,
    element = document.body,
  } = props;

  return createPortal(children, element);
};
