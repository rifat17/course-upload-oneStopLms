describe("User can login with valid email and password", () => {
  before(() => {
    cy.login();
    cy.wait(10000);
  });
  it("User can login with valid email and password", () => {
    cy.visit("https://adminqa.onestoplms.com/");
    cy.wait(10000);
  });
  after(() => {
    cy.logout();
  });
});
