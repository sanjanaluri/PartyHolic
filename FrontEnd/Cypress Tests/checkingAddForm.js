describe("render the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get('[href="/partylist"]').click();
    cy.get(".ml-8").click();

    cy.get("#Party_name").type("Gator Party", { force: true });
    cy.get("#Tags").type("above 18");
    cy.get("#Description").type("This is My party Description");
    cy.get("#Start_time").type("Jan 2,2006 3:00 pm");
    cy.get("#End_time").type("Jan 3,2006 4:00 pm");
    cy.get("#Lane_apt").type("4000 SW 37th Blvd");
    cy.get("#City").type("Gainesville");
    cy.get("#State").type("Florida");
    cy.get("#Country").type("United States of America");
    cy.get(".py-3 > .ml-8").click();
    cy.wait(1000);
    cy.get(".inline-block").click();
    cy.get(".text-3xl").click();
    cy.reload();
    cy.wait(1000);
    cy.get('[href="/partylist"]').click();
  });
});
