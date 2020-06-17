describe("iFrame tests", function() {

    beforeEach(() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
    })

    it('iFrame', function() {
        cy.get("#txtUsername").type("Admin")
        cy.get("#txtPassword").type("admin123")
        cy.get("#btnLogin").click()

        cy.get(".panelTrigger").then(function($welcomeMsgEle) {
            const welcomeTxt = $welcomeMsgEle.text()
            cy.log(welcomeTxt)
            // const userName = 'Admin'
            // expect(welcomeTxt).eq("Welcome " + userName)
            expect(welcomeTxt).to.match(/Welcome \D+/)
            // cy.contains(/Welcome .*/)
        })
    })
        

})