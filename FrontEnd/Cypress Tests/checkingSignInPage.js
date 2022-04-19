describe("render the home page", () => {
  it("renders correctly", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get('[href="/sign-in"]').click();
    cy.get("#emailID").type("alekhyagollam68@gmail.com");
    cy.get(".mt-4 > .w-full").type("123456");
    cy.get(".bg-purple-500").click();
  });
});
