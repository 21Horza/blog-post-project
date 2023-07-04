let currentArticleId: string = '';

describe('User goes to the Article detail page', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      currentArticleId = article.id;
      cy.log(JSON.stringify(article));
      cy.visit(`articles/${article.id}`);
    });
  });

  afterEach(() => {
    cy.deleteArticle(currentArticleId);
  });

  it('and sees the article details', () => {
    cy.getByTestId('ArticleDetails.Info').should('exist');
  });

  it('and sees the article recommendations list', () => {
    cy.getByTestId('ArticleRecommendationsList').should('exist');
  });

  it('and sends a comment', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('AddCommentForm').scrollIntoView();
    cy.addComment('text');
    cy.getByTestId('CommentCard.Content').should('have.length', 1);
  });

  it('and sends a rating', () => {
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });

  it('and sends a rating (example: stubbed (on fixtures))', () => {
    cy.intercept('GET', '**/articles/*', {
      fixture: 'article-details.json',
    });
    cy.getByTestId('ArticleDetails.Info');
    cy.getByTestId('RatingCard').scrollIntoView();
    cy.setRate(5, 'feedback');
    cy.get('[data-selected=true]').should('have.length', 5);
  });
});
