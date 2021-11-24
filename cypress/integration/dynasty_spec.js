describe('check dynasty things', () => {
    it('checks ESPN Dynasty updates', () => {
        cy.visit('https://www.espn.com/fantasy/football/story/_/id/15698900/mike-clay-top-240-dynasty-fantasy-football-rankings-nfl');
        cy.get('[data-dateformat="date1"]').first().should('have.text', 'Nov 19, 2021');
    })

    it('checks ETR Dynasty updates', () => {
        cy.visit('https://establishtherun.com/etrs-dynasty-rankings/');
        cy.get('span.published').first().should('have.text', 'Oct 20, 2021');
    })
})
