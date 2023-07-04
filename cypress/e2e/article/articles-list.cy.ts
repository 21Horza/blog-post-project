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
})