import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../pageDefinition/loginPage';

Given('ingreso las palabras y las busco', (datatable) => {
    datatable.hashes().forEach(element => {
        LoginPage.searchWord(element.palabra)
    });
})

When('carga label {string}', (texto) => {
    cy.contains(texto)
})