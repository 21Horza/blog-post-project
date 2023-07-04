describe('User goes to the artiles page', () => {

  beforeEach(() => {
    cy.login().then(data => {
      cy.visit('articles');
    });
  })

  it('and articles successfully loaded', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  })

  it('Example: stubbed (on fixtures)', () => {
    cy.intercept('GET', '**/articles?*', { fixture: 'articles.json' });
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
  })

  it.skip('Example: skipped test', () => {
    cy.getByTestId('ArticleList').should('exist');
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3);
    cy.get('asasa').should('exist');
  })
})