Feature: Ingreso a página web y se hacen validaciones

Background:
    Given carga la pagina web

    Scenario: Validar carga
    Given ingreso las palabras y las busco
        |palabra|
        |prueba |
    Then carga label 'Cerca de'