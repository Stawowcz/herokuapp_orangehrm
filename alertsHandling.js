describe("dateChanged", function() {


    it('Dropdown', function() {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    })

    it('Alert type', function() {
        cy.on('window:alert', function(alertText) {
            expect(alertText).eq('I am a JS Alert');
        })
        cy.contains('Click for JS Alert').click()
    
    })

    it('Confirm type', function() {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.on('window:confirm', function(alertText) {
            return false
        })
        cy.contains('Click for JS Confirm').click()
    
    })

    it.only('Confirm type', function() {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        cy.window().then(function($win){
            cy.stub($win, 'prompt').returns('')
            cy.contains('Click for JS Prompt').click()
        })
        
    })




});