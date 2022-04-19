describe("render the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get('[href="/partylist"]').click();
    cy.get(
      ":nth-child(1) > .overflow-hidden > .block > .bg-white > .pt-2 > .text-m > a"
    ).click();
  });
});
