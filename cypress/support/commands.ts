import { login } from './commands/login';

// cypress/support/commands/login.ts
Cypress.Commands.add('login', login);

declare global {
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>
    }
  }
}
export {};
