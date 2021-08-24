///<reference types="cypress" />

import Cadastro from "../support/Cadastro";


describe("Teste", () => {

    it("Criar usuário", () => {
        Cadastro.cadastroLogin();
        Cadastro.Cadastrar("Sam", "sams33@gmail.com", "teste");
        
        cy.get('.alert-link').should('have.text', "Cadastro realizado com sucesso");


    });

    it("Adicionar produto", () => {

        cy.get('[data-testid=adicionarNaLista]').first().click();

    });

    it("Validar lista", () => {

        cy.get('h1').should('have.text', "Lista de Compras");


    });


});