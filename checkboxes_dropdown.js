describe("dateChanged", function() {


    it.only('Dropdown', function() {
        cy.visit("https://the-internet.herokuapp.com/dropdown");
        cy.get('#dropdown').select("Option 1");
        cy.get('#dropdown').children().first().then(function(dropdownEle){
            cy.log(dropdownEle.text());
        })
        cy.get("#dropdown").contains("1").should("be.selected")
        cy.get('[value=2]').should("be.not.selected")
    })

    it('Checkbox', function() {
        cy.visit("https://the-internet.herokuapp.com/checkboxes");
        cy.get('[type = checkbox]').first().check();
        cy.get('[type = checkbox]:eq(0)').should("be.checked")
        cy.get('[type=checkbox]:eq(1)').uncheck()
        cy.get('[type = checkbox]:eq(1)').should('be.not.checked')
    })

})