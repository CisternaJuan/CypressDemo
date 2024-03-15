const labelBuscar = 'div[class="SDkEP"]'
const btnBuscar = 'input[class="gNO89b"]'

class LoginPage {

    static searchWord(texto) {
        cy.get(labelBuscar).type(texto)
        cy.get(btnBuscar).eq(0).click()
    }
}

export default LoginPage