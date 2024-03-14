import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('carga la pagina web', () => { 
    cy.visit('https://www.google.com/')
})

When('ingreso las palabras y las busco', (datatable) => {
    datatable.hashes().forEach(element => {
        cy.get('div[class="SDkEP"]').click()
        cy.get('div[class="SDkEP"]').type(element.palabra)
        cy.contains('Buscar con Google').click();
    });
})

Then('carga label {string}', (texto) => {
    cy.contains(texto)
})