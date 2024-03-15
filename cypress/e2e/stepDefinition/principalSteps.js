import { Given } from 'cypress-cucumber-preprocessor/steps';
import PrincipalPage from '../pageDefinition/principalPage';

Given('carga la pagina web', () => { 
    PrincipalPage.loadPage()
})