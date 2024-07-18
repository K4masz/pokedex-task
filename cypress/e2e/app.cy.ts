describe('Pokedex Application', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('should display the title "Pokédex"', () => {
    cy.get('mat-card-title').should('exist');
    cy.get('mat-card-title').should('contain', 'Pokédex');
  });

  it('should display filters', () => {
    cy.get('app-pokemon-list').should('exist');
    cy.get('app-filters').should('exist');
  })

  it('should display a list of Pokemon', () => {
    cy.get('app-pokemon-list').should('exist');
    cy.get('app-pokemon-list-prestentational').should('exist');
  });

  it('should display a paginator', () => {
    cy.get('app-pokemon-list').should('exist');
    cy.get('app-pokemon-list-prestentational').should('exist');
    cy.get('mat-paginator').should('exist');
  })
});

