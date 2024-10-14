import { altaSiniestro, filtroAjustadorPorEstado, login, logout } from '../../../support/utils';

describe('Integracion Mercantil', () => {
  it('Filtro por idSiniestro', () => {
    login('mschiro', '1234La');
    cy.wait(2000);
    cy.get('#mainMenu > :nth-child(4) > .ajax-link > span').click();
    cy.wait(2000);
    cy.get('#btnAgregar').click();
    cy.wait(2000);
    cy.get('#numeroTasacionDialog > .modal-body > .row > .col-md-12 > .form-group > div.col-md-6 > .form-control').type('302274')
    cy.get('#numeroTasacionDialog > .modal-footer > .btn-success').click()
    cy.wait(2000);
    cy.get('#select2-chosen-4').should('have.text', 'MERCANTIL ANDINA');
  });
 
 
});
