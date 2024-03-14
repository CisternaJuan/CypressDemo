import { Given, When } from 'cypress-cucumber-preprocessor/steps';

Given('ingreso las palabras y las busco', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('div[class="SDkEP"]').click()
        cy.get('div[class="SDkEP"]').type(element.palabra)
        cy.contains('Buscar con Google').click();
    });
})

When('carga label {string}', (texto) => {
    cy.contains(texto)
})