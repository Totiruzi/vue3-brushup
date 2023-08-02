describe('Play audio', () => {
  it('should play audio', () => {
    cy.visit('/');

    cy.get('.composition-name:first').click();
    cy.get('#play-button').click();
     // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000);

    cy.get('#player-play-btn').click();
  })
})