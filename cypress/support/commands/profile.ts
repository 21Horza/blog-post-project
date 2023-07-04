export const updateProfile = (name: string, surname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Name').clear().type(name);
    cy.getByTestId('ProfileCard.Surname').clear().type(surname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asas' },
        body: {
            id: '4',
            first: 'Test',
            lastname: 'User',
            age: 100,
            currency: 'USD',
            country: 'USA',
            city: 'Colorado',
            username: 'testuser',
            avatar: 'https://cag.gov.in/uploads/PhotoGallery/PG-Photo-05ebbf5c1ac24e7-97634843.png',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(name: string, surname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
