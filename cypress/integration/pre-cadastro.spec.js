/// <reference types="cypress"/>
var  faker  =  require  ( 'faker' ) ;


describe('Funcionalidade Pre-Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta/')
    });

    it('Deve completar o pre cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobreNomefaker = faker.name.lastName()
        let emailFaker =  faker.internet.email(nomeFaker)

        cy.get('#reg_email').type(emailFaker)
        cy.get('#reg_password').type('Teste@teste.com$')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobreNomefaker)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });

    it('Deve completar o Pré-Cadastro com sucesso usando comandos customizados', () => {
        let emailFaker2 =  faker.internet.email()
        cy.preCadastro(emailFaker2, 'senha@senha$', 'Camila', 'Garcia')
        cy.get('.woocommerce-message').should('contain' , 'Detalhes da conta modificados com sucesso.')
    });

});

