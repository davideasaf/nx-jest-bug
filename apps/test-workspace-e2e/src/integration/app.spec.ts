import { getGreeting } from '../support/app.po';

describe('test-workspace', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to test-workspace!');
  });
});
