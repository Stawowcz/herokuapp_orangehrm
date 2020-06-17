describe("iFrame tests", function() {

    beforeEach(() => {
        cy.visit("https://the-internet.herokuapp.com/iframe")
    })

    it('iFrame', function() {
        cy.get("#mce_0_ifr").within(function($iFrame) {
            const iFrameContent = $iFrame.contents().find('body')

            cy.wrap(iFrameContent)
            .clear()
            // .click()
            .type("Hello")
        })
        
    })
})