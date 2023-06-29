/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/Rating';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            {t('Main')}
            <RatingCard
                title="How is the article?"
                feedbackTitle="Leave your feedback"
                hasFeedback
            />
            <Counter />
        </Page>
    );
};

export default MainPage;
