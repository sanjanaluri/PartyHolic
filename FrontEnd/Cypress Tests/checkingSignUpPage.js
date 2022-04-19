describe("render the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get('[href="/sign-up"]').click();
    cy.get(".mb-2 > .mb-6 > .w-full").type("Santosh");
    cy.get(".mb-2 > :nth-child(2) > .w-full").type("Maturi");
    cy.get("form.mt-6 > :nth-child(2) > .w-full").type(
      "santoshmaturi@gmail.com"
    );
    cy.get("form.mt-6 > :nth-child(3) > .w-full").type("123456");
    cy.get("form.mt-6 > :nth-child(4) > .w-full").type("123456");
    cy.get(":nth-child(5) > :nth-child(3) > .w-full").type("4000 SW 37th BLVD");
    cy.get(":nth-child(5) > .flex-wrap > .mb-6 > .w-full").type("Gainesville");
    cy.get(":nth-child(5) > .flex-wrap > :nth-child(2) > .w-full").type(
      "Florida"
    );
    cy.get(".bg-purple-500").click();
    cy.get(".text-purple-500 > a").click();
  });
});
