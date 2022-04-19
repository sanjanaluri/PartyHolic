describe("render the home page", () => {
    it("renders correctly", () => {
      cy.visit("/");
      cy.wait(2000);
      cy.get('[href="/partylist"]').click();
      cy.get('.ml-8').click();

      
      cy.get('#Party_name').type('My Gator Party',{force: true})
      cy.get('#Host_id').type('4',{force: true})
      cy.get('#Address_id').type('Above 18',{force: true})
      cy.get('#Description').type("This is My party Description")
      cy.get('#Start_time').type('2006-01-02T15:04:06-05:00')
      cy.get('#End_time').type('2006-01-02T15:04:06-05:00')
      cy.get('#Image_id').type('Image3.jpg')
      cy.get('#Attendee_count').type('10')
      cy.get('#Latitude').type(-82.3291)
      cy.get('#Longitude').type(29.63597)
      cy.get('.inline-flex').click()
      cy.get('.inline-block').click()
      cy.visit("/");
      cy.reload()
      cy.wait(1000);
      cy.get('[href="/partylist"]').click();
    });
  });
  