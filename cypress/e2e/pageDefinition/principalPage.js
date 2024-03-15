const URL = 'https://www.google.com/'

class PrincipalPage {

    static loadPage() {
        cy.visit(URL)
    }
}

export default PrincipalPage