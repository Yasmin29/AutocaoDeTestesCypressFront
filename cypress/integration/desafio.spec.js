///<reference types="cypress" />

import Cadastro from "../support/Cadastro";
const faker = require('faker');

describe("Teste", () => {

    it("Criar usuário", () => {
        Cadastro.cadastroLogin();
        Cadastro.Cadastrar(faker.name.findName(), faker.internet.email(), faker.internet.password());
        
        cy.get('.alert-link').should('have.text', "Cadastro realizado com sucesso");

    });

    it("Adicionar produto", () => {

        cy.get('[data-testid=adicionarNaLista]').first().click();

    });

    it("Validar lista", () => {

        cy.get('h1').should('have.text', "Lista de Compras");


    });

    /* it("Excluir item lista", () => {

        cy.get('[data-testid=limparLista]').click();

    });
 */

});