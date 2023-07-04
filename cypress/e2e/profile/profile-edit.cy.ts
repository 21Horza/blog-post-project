import { User } from '../../../src/entities/User';

let profileId: string;

describe('User goes to the profile page', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data: User) => {
      profileId = data.id;
      cy.visit(`profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('and profile successfully loaded', () => {
    cy.getByTestId('ProfileCard.Name').should('have.value', 'Test');
  });
  it('and the user edits the profile', () => {
    const newName = 'newName';
    const newSurname = 'newSurname';
    cy.updateProfile(newName, newSurname);
    cy.getByTestId('ProfileCard.Name').should('have.value', newName);
    cy.getByTestId('ProfileCard.Surname').should('have.value', newSurname);
  });
});
