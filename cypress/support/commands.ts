import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';
import * as commentCommands from './commands/comment';
import * as ratingCommands from './commands/rating';

// cypress/support/commands/common.ts
Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentCommands);
Cypress.Commands.addAll(ratingCommands);

// EXAMPLE OF OVERWRITE
// Cypress.Commands.overwrite('intercept', () => {
//     const FIXTURE_MODE = process.env.FIXTURE_MODE;
//     const fixtureName = req.METHOD + req.url + hash(req.body);

//     if (FIXTURE_MODE === 'READ') {
//         readFixture()
//     }

//     if (FIXTURE_MODE === 'WRITE') {
//         createFixture(fixtureName, req.body);
//     }

//     if(FIXTURE_MODE === "API") {

//     }
// });

export {};
