import { classNames } from '@/shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

/**
 * Outdated, use new components from redesigned folder
 * @deprecated
 */
export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('loader', {}, [className])}>
    <span className="loader" />
  </div>
);
