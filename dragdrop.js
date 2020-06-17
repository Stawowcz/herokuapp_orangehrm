describe("dateChanged", function() {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
    })

    it('Disappearing element', function() {
        cy.get("#column-a").drag('#column-b')
        cy.get("#column-a").then((txt) => {
            cy.wrap(txt).should('have.text', "B");
        })
        cy.get("#column-a").then((txt) => {
            expect(txt).to.have.text("B")
        })
        cy.get("#column-b").then((txt) => {
            cy.wrap(txt).should('contain.text', "A")
        })
        cy.get("#column-b").then((txt) => {
            expect(txt).to.contain.text("A")
        })
    })
})