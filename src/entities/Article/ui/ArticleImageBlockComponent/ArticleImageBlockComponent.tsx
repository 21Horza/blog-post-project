import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { Text as TextDeprecated, TextAlign } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img alt="" src={block.src} className={cls.img} />
      {block.title && (
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Text title={block.title} align="center" />
      }
          off={
            <TextDeprecated text={block.title} align={TextAlign.CENTER} />
      }
        />
      )}
    </div>
  );
});
