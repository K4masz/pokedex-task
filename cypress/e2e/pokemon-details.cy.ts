describe('Pokemon Details', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should open the drawer with card details', ()=>{
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mdc-data-table__content > :nth-child(1) > .cdk-column-supertype').click();
    cy.get('.pokemon-details__card-image').should('be.visible');
    cy.get('#mat-input-0').should('be.visible');
    cy.get('#mat-input-1').should('be.visible');
    cy.get('.mat-mdc-form-field.ng-tns-c1534922977-10').should('be.visible');
    cy.get('.mat-mdc-form-field.ng-tns-c1534922977-12').should('be.visible');
    cy.get('.mat-mdc-form-field.ng-tns-c1534922977-14').should('be.visible');
    /* ==== End Cypress Studio ==== */
  })

  it('should open the drawer and card details form should be disabled', ()=>{
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mdc-data-table__content > :nth-child(1) > .cdk-column-supertype').click();
    cy.get('#mat-input-0').should('be.disabled');
    cy.get('#mat-input-1').should('be.disabled');
    /* ==== End Cypress Studio ==== */
  })

  it('should ovewrite the name data', ()=>{
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mdc-data-table__content > :nth-child(1) > .cdk-column-name').click();
    cy.get('.pokemon-details__controls > :nth-child(1)').click();
    cy.get('#mat-input-0').click();
    cy.get('#mat-input-0').clear('Aggrono');
    cy.get('#mat-input-0').type('Aggronooo');
    cy.get('.pokemon-details__controls > :nth-child(2)').click();
    cy.get('.pokemon-details__controls > :nth-child(4)').click();
    cy.get('app-pokemon-list-prestentational > .mat-mdc-table > .mdc-data-table__content > :nth-child(1) > .cdk-column-name').should('have.text', ' Aggronooo ');
    /* ==== End Cypress Studio ==== */
  })
})
