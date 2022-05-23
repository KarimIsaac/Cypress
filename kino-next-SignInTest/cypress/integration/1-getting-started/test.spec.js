describe('Cypress test if my website is up', () => {
  it('visit the site', () => {
    cy.visit('http://localhost:3000')
  })
  it("click on login link", () => {
    cy.contains("login").click();
  });
})