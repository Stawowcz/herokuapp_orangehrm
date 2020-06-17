describe("fileUpload", function() {

    beforeEach('visitFileUploadUrl', function() {
        cy.visit("https://the-internet.herokuapp.com/upload");
    })

    it('Upload files', function() {
        const fileName = 'Capture.png';

        cy.fixture(fileName).then(function(fileContent) {
            cy.get("#file-upload").attachFile({fileContent, fileName, mimeType:'application/png'})
            cy.get('#file-submit').click()
        })
    })
})