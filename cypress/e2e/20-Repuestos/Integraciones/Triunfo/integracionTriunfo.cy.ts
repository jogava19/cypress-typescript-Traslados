import { altaSiniestro, filtroAjustadorPorEstado, login, logout } from '../../../support/utils';

describe('integracion Triunfo', () => {
  it('Filtro por idSiniestro', () => {
    login('ajustadortriunfo', '1234La');
    cy.wait(2000);
    cy.get('#mainMenu > :nth-child(4) > .ajax-link > span').click();
    cy.wait(2000);
    cy.get('#btnAgregar').click();
    cy.wait(2000);
    cy.get('#numeroAltaPorIntergacionDialog > .modal-body > .row > .col-md-12 > .form-group > div.col-md-6 > .form-control').type('123')
    cy.get('#numeroAltaPorIntergacionDialog > .modal-footer > .btn-success').click()
    cy.get('#swal2-content').should('have.text', 'Error al obtener tasaciones de Triunfo: No existe la compulsa');
  });
  it('compulsaOK', () => {
    login('ajustadortriunfo', '1234La');
    cy.get('#mainMenu > :nth-child(4) > .ajax-link > span').click();
    cy.wait(2000);
    cy.get('#btnAgregar').click();
    cy.wait(2000);
    cy.get('#numeroAltaPorIntergacionDialog > .modal-body > .row > .col-md-12 > .form-group > div.col-md-6 > .form-control').type('R0002822')
    cy.get('#numeroAltaPorIntergacionDialog > .modal-footer > .btn-success').click()
    cy.get('#select2-chosen-4').should('have.text', 'TRIUNFO');
  });
 
});
