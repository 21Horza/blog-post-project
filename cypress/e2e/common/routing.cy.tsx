/// <reference types="cypress" />
import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
  describe('User is NOT authed', () => {
    it('Go to the main page', () => {
      cy.visit('/');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Open the profile page', () => {
      cy.visit('/profile/1');
      cy.get(selectByTestId('MainPage')).should('exist');
    });
    it('Go to the not existed path', () => {
      cy.visit('/fdsjfdsjfj');
      cy.get(selectByTestId('NotFoundPage')).should('exist');
    });
  });
  describe('User IS authed', () => {
    beforeEach(() => {
      /**
         * Custom login function
         * @example cy.login('user', 'password')
         */
      cy.login();
    });
    it('Open the profile page', () => {
      cy.visit('/profile/4');
      cy.get(selectByTestId('ProfilePage')).should('exist');
    });
    it('Open the articles page', () => {
      cy.visit('/articles');
      cy.get(selectByTestId('ArticlesPage')).should('exist');
    });
  });
});
