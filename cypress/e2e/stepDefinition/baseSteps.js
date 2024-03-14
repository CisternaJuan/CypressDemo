import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('carga la pagina web', () => { 
    cy.visit('https://www.google.com/')
})