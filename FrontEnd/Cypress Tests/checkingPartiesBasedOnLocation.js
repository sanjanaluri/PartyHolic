describe("render the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get('[href="/partylist"]').click();
  });
});
