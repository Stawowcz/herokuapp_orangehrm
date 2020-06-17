describe("addRemoveElements", function() {


    it('Remove add button', function() {
        cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
        for (let i = 0; i < 4; i++) {
            cy.get('.example>button').click();
        }
        cy.get('.example>button').dblclick()
        cy.get('.example>button').dblclick()
        cy.get("div >button").click({multiple: true})
        cy.get("div >button").should("exist")
        cy.get("div >button").should("be.visible")
        cy.get("div >button").should("not.have.value", "cos")
        cy.get("div>button:eq(1)").should("have.text", "Delete")
        cy.get("div>button:eq(0)").should("not.have.text", "Delete")
        // cy.get("div>button:eq(0)>onclick").should("contain", "Delete")
        cy.get(".example").should("have.class", "example")
        cy.get(".example").should("not.have.class", "examplee")
        cy.get(".example").should("not.have.css", 'class="added-manually"') //?
    })
})

describe("addRemoveElements", function() {

    it('Double click', function() {
        cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
        cy.get('.example>button').dblclick()
        cy.get('.example>button').dblclick()
    })
})

describe("rightClick", function() {

    it.only('rightClick', function() {
        cy.visit("https://the-internet.herokuapp.com/add_remove_elements/");
        cy.get('.example>button').rightclick()
        cy.wait(2000)
    })
})


