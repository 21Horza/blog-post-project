import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation('about');

    return (
        <Page>
            {t('You don\'t have access to this page')}
        </Page>
    );
};

export default ForbiddenPage;