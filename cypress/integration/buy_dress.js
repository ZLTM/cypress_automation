/// <reference types="cypress" />

context('Window', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
    })

/*     it('Logs in with an existent user', () => {
        cy.get('.login').click()
        cy.get('#email').type('david.revilla.jd@gmail.com').should('have.value', 'david.revilla.jd@gmail.com')
        cy.get('#passwd').type('MyPass1').should('have.value', 'MyPass1')
        cy.get('#SubmitLogin').click()
        }) */

    it('Selects a dress and finishes the checkout', () => {
        cy.get('ul[class="sf-menu clearfix menu-content sf-js-enabled sf-arrows"]>li>a[title="Dresses"]').click()
        cy.get('a[href="http://automationpractice.com/index.php?controller=cart&add=1&id_product=3&token=e817bb0705dd58da8db074c69f729fd8"]').click()
        cy.get('a[title="Proceed to checkout"]').click()
        cy.get('p>a[title="Proceed to checkout"]').click()

        cy.get('#email').type('david.revilla.jd@gmail.com').should('have.value', 'david.revilla.jd@gmail.com')
        cy.get('#passwd').type('MyPass1').should('have.value', 'MyPass1')
        cy.get('#SubmitLogin').click()

        cy.get('button[class="button btn btn-default button-medium"]').click()
        cy.get('label[for="cgv"]').click()   
        cy.get('button[name="processCarrier"]').click()

        cy.get('a[class="bankwire"]').click()
        cy.get('p>button[type="submit"]').click()

        cy.get('a[title="Back to orders"]').should('exist');
    })
})
