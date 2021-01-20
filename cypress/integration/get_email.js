/// <reference types="cypress" />

context('Window', () => {
    beforeEach(() => {
        cy.visit('https://reqres.in')
    })

    it('Selects a dress and finishes the checkout', () => {
        cy.intercept('GET', 'api/users?page=2', (req) => {
            expect(req.body).to.include('michael.lawson@reqres.in')
            })

    })
})

