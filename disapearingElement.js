describe("dateChanged", function() {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/disappearing_elements")
    })

    it('Disappearing element', function() {
        cy.reload()
        cy.get("#content > div > ul > li:eq(4)").should('have.text', "Gallery")
        cy.get("#content > div > ul > li:eq(4)").then(($text) => {
            cy.wrap($text).should('have.text', "Gallery")
        })
        cy.get("#content > div > ul > li:eq(4)").then((text) => {
            expect(text).to.have.text('Gallery')
        })
    })
})