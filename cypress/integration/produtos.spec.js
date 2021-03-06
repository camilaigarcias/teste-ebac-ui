/// <reference types="cypress"/>

describe('Funcionalidade Pagina de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')

    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            //.eq(3)
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });

    it('Deve adicionar um produto ao carrinho', () => {
        
        var quantidade = 2
        
        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Purple').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain' , (quantidade))
        cy.get('.woocommerce-message').should('contain' ,  `${quantidade} × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.`)


    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Arcadio Gym Short', '33', 'Black', 3)
        
    });

    it('Deve adicionar produtos ao carrinho usando comando customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'L', 'Green', 5)
        
    });
  

});