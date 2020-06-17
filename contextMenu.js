describe("dateChanged", function() {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/context_menu")
    })

    it('Alert type', function() {
        cy.on('window:alert', function(alertText) {
            expect(alertText).eq('You selected a context menu');
        })
        cy.get('#hot-spot').rightclick()
    })
})