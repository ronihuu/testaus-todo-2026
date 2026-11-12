describe('todo app', () => {
  it('loads the task list', () => {
    cy.visit('/');

    cy.contains('h1', 'Basic CRUD ToDo web app').should('be.visible');
    cy.get('#empty-state').should('be.visible');
  });
});