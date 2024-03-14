Feature: Ingreso a página web y se hacen validaciones

Background:
    Given carga la pagina web

    Scenario: Validar primera carga
    Given ingreso las palabras y las busco
        |palabra|
        |prueba |
    Then carga label 'Cerca de'

    Scenario: Validar segunda carga 
    Given ingreso las palabras y las busco
        |palabra|
        |prueba 2|
    Then carga label 'Cerca de'