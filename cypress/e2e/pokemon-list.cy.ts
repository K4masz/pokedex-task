describe('Pokemon List', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('should show all the columns', () => {
    cy.get('app-pokemon-list-prestentational').find('th').should('have.length', '5')
  })

  it('should display different data after paginator use', () => {
    let text1: string = '', text2: string = '';

    cy.get('td').first().invoke('text').then((firstText) => {
      text1 = firstText;

      cy.get('.mat-mdc-paginator-navigation-next').click();
      cy.wait(4000);
      cy.get('td').first().invoke('text').then((secondText) => {
        text2 = secondText
        expect(text1).not.equal(text2)
      })
    })
  })

  it('should show less data after applying filter',()=>{
    cy.get('.mat-mdc-paginator-range-label').first().invoke('text');
    cy.get('mat-select[formControlName=superType]').click().get('mat-option').contains('Energy').click();
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.mat-mdc-paginator-range-label').should('have.text', ' 1 – 10 of 366 ');
    /* ==== End Cypress Studio ==== */
  })

  it('should only show data with the same superType value',() => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('mat-select[formControlName=superType]').click().get('mat-option').contains('Energy').click();
    cy.get('.mdc-data-table__content > :nth-child(1) > .cdk-column-supertype').should('have.text', ' Energy ');
    cy.get(':nth-child(2) > .cdk-column-supertype').should('have.text', ' Energy ');
    cy.get(':nth-child(3) > .cdk-column-supertype').should('have.text', ' Energy ');
    cy.get(':nth-child(4) > .cdk-column-supertype').should('have.text', ' Energy ');
    cy.get(':nth-child(5) > .cdk-column-supertype').should('have.text', ' Energy ');
    cy.get(':nth-child(6) > .cdk-column-supertype').should('have.text', ' Energy ');
    cy.get(':nth-child(7) > .cdk-column-supertype').should('have.text', ' Energy ');
    cy.get(':nth-child(8) > .cdk-column-supertype').should('have.text', ' Energy ');
    cy.get(':nth-child(9) > .cdk-column-supertype').should('have.text', ' Energy ');
    /* ==== End Cypress Studio ==== */
  })


  it('should show data that includes subTypes picked in filters',()=>{
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#mat-select-value-5').click();
    cy.get('#mat-option-7').click();
    cy.get('.mdc-data-table__content > :nth-child(1) > .cdk-column-subtypes').should('have.text', ' Baby ');
    cy.get(':nth-child(2) > .cdk-column-subtypes').should('have.text', ' Baby ');
    cy.get(':nth-child(3) > .cdk-column-subtypes').should('have.text', ' Baby ');
    cy.get(':nth-child(4) > .cdk-column-subtypes').should('have.text', ' Baby ');
    cy.get(':nth-child(5) > .cdk-column-subtypes').should('have.text', ' Baby ');
    cy.get(':nth-child(6) > .cdk-column-subtypes').should('have.text', ' Baby ');
    cy.get(':nth-child(7) > .cdk-column-subtypes').should('have.text', ' Baby ');
    cy.get(':nth-child(8) > .cdk-column-subtypes').should('have.text', ' Baby ');
    cy.get(':nth-child(9) > .cdk-column-subtypes').should('have.text', ' Baby ');
    cy.get(':nth-child(10) > .cdk-column-subtypes').should('have.text', ' Baby ');
    /* ==== End Cypress Studio ==== */
  })

  it('should show data that includes types picked in filters', ()=>{
    /* ==== Generated with Cypress Studio ==== */
    cy.get('mat-select[formControlName=types]').click().get('mat-option').contains('Fairy').click();
    cy.get('.cdk-overlay-backdrop').click();
    cy.get('.mdc-data-table__content > :nth-child(1) > .cdk-column-types').should('have.text', ' Fairy ');
    cy.get(':nth-child(2) > .cdk-column-types').should('have.text', ' Fairy ');
    cy.get(':nth-child(3) > .cdk-column-types').should('have.text', ' Fairy ');
    cy.get(':nth-child(4) > .cdk-column-types').should('have.text', ' Fairy ');
    cy.get(':nth-child(5) > .cdk-column-types').should('have.text', ' Fairy ');
    cy.get(':nth-child(6) > .cdk-column-types').should('have.text', ' Fairy ');
    cy.get(':nth-child(7) > .cdk-column-types').should('have.text', ' Fairy ');
    cy.get(':nth-child(8) > .cdk-column-types').should('have.text', ' Fairy ');
    /* ==== End Cypress Studio ==== */
  })

  it('should reset filters', ()=>{
    /* ==== Generated with Cypress Studio ==== */
    cy.get('mat-select[formControlName=superType]').click().get('mat-option').contains('Energy').click();
    cy.get('[mat-button]').click();
    cy.get('mat-mdc-select-placeholder').should('have.text', '');
    /* ==== End Cypress Studio ==== */
  })
});
