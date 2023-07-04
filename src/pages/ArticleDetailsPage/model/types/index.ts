import {
  ArticleDetailsCommentsSchema,
  ArticleDetailsRecommendationsSchema,
} from '../../../ArticleDetailsPage';

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema;
    recommendations: ArticleDetailsRecommendationsSchema;
}
