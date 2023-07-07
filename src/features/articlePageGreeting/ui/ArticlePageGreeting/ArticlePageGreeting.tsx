import { useTranslation } from 'react-i18next';
import { memo, useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { Modal } from '@/shared/ui/Modal';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Drawer } from '@/shared/ui/Drawer';
import { Text } from '@/shared/ui/Text';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { isArticlePageOpen } = useJsonSettings();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlePageOpen) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlePageOpen: true }));
    }
  }, [isArticlePageOpen, dispatch]);

  const onClose = () => setIsOpen(false);

  const text = (
    <Text
      title={t('Welcome to the articles page!')}
      text={t('Here you can read the articles on different topics')}
    />
  );

  if (isMobile) {
    return (
      <Drawer lazy isOpen={isOpen} onClose={onClose}>
        {text}
      </Drawer>
    );
  }

  return (
    <Modal
      lazy isOpen={isOpen} onClose={onClose}
    >
      {text}
    </Modal>
  );
});
