describe('some name', () => {
    it('my test', () => {
        cy.visit('/');
        cy.contains('[data-testid="uol-c-link-label"]', 'The death of Her Majesty Queen Elizabeth II').click();
    })
})