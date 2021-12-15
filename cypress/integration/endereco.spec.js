/// <reference types="cypress"/>
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços- Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })

    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEndercoFaturamento('Camila', 'Santos', 'AG', 'Brasil', 'Rua Sol', '555', 'Manaus', 'Amazonas', '00001000', '4455885551', 'santos@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

    it.only('Deve fazer cadastro de faturamento com sucesso- Usando arquivo de dados', () => {
        EnderecoPage.editarEndercoFaturamento(dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });


    it('Deve fazer cadastro de endereço com sucesso', () => {
        EnderecoPage.editarEndercoEntrega('Camila', 'Garcia', 'Araujo', 'Brasil', 'Av Paulista', '1374', 'São Paulo', 'São Paulo', '01310100')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });
});