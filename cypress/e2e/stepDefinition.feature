Feature: Login to Application

    Scenario: Validar carga
    Given carga la pagina web
    When ingreso las palabras y las busco
        |palabra|
        |prueba |
    Then carga label 'Cerca de'