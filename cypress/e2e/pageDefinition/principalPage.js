const URL = 'https://www.google.com/'

class PrincipalPage {

    static loadPage() {
        cy.visit(Cypress.env('URLGOOGLE'))
    }
}

export default PrincipalPage