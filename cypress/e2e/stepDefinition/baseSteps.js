import { Before , After } from "cypress-cucumber-preprocessor/steps";

Before(()=>{
    cy.reload() 
})

After(()=>{
    cy.reload() 
})