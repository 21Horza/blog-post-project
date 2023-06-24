/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Main')}
            <RatingCard
                title="How is the article?"
                feedbackTitle="Leave your feedback"
                hasFeedback
            />
        </Page>
    );
};

export default MainPage;
