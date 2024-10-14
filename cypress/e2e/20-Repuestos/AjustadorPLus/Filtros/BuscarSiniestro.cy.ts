import { altaSiniestro, filtroAjustadorPorEstado, login, logout } from '../../../support/utils';
const usuario='pcolonel';
const contraseña='1234La';

describe('Filtro por idSiniestro', () => {
  it('Filtro por idSiniestro', () => {
    login(usuario, contraseña);
    cy.get('#mainMenu > :nth-child(1) > .ajax-link').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > div.col-md-6 > .form-control').type('21451');
    cy.get('#buscquedaSiniestrosDialog > .modal-footer > .btn-success').click();
    cy.wait(2000);  
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td.text-center').eq(0).should('have.text', '21451');
    });
    
  });

  it('Filtro por nro Siniestro', () => {
    login(usuario, contraseña);
    cy.get('#mainMenu > :nth-child(1) > .ajax-link').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > div.col-md-6 > .form-control').type('e4yae4ttt');
    cy.get('#buscquedaSiniestrosDialog > .modal-footer > .btn-success').click();
    cy.wait(2000);  
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td.text-center').eq(4).should('have.text', 'e4yae4ttt');
    });
    
  });

  it('Filtro por nro Patente', () => {
    login(usuario, contraseña);
    cy.get('#mainMenu > :nth-child(1) > .ajax-link').click();
    cy.wait(2000);
    cy.get('#btnTipoPatente > .caret').click();
    cy.get(':nth-child(2) > .tipoPatente').click();
    cy.get('input#NroPatente').type('ad-455-ar');
    cy.wait(2000);
    cy.get('#buscquedaSiniestrosDialog > .modal-footer > .btn-success').click();
    cy.wait(2000);  
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td.text-center').eq(6).should('have.text', 'ad-455-ar');
    });
    
  });
  it('Filtro por nroSiniestro y idSiniestro', () => {
    login(usuario, contraseña);
    cy.get('#mainMenu > :nth-child(1) > .ajax-link').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > div.col-md-6 > .form-control').type('21451');
    cy.get(':nth-child(2) > div.col-md-6 > .form-control').type('e4yae4ttt');
    cy.get('#buscquedaSiniestrosDialog > .modal-footer > .btn-success').click();
    cy.wait(2000);  
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td.text-center').eq(0).should('have.text', '21451');
    });
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td.text-center').eq(4).should('have.text', 'e4yae4ttt');
    });
    
  });
  it('Filtro por idSiniestro y patente', () => {
    login(usuario, contraseña);
    cy.get('#mainMenu > :nth-child(1) > .ajax-link').click();
    cy.wait(2000);
    cy.get(':nth-child(1) > div.col-md-6 > .form-control').type('21451');
    cy.get('#btnTipoPatente > .caret').click();
    cy.get(':nth-child(2) > .tipoPatente').click();
    cy.get('input#NroPatente').type('ad-455-ar');
    cy.get('#buscquedaSiniestrosDialog > .modal-footer > .btn-success').click();
    cy.wait(2000);  
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td.text-center').eq(6).should('have.text', 'ad-455-ar');
    });
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td.text-center').eq(0).should('have.text', '21451');
    });
    
  });
  it('Filtro por nroSiniestro y patente', () => {
    login(usuario, contraseña);
    cy.get('#mainMenu > :nth-child(1) > .ajax-link').click();
    cy.wait(2000);
    cy.get(':nth-child(2) > div.col-md-6 > .form-control').type('e4yae4ttt');
    cy.get('#btnTipoPatente > .caret').click();
    cy.get(':nth-child(2) > .tipoPatente').click();
    cy.get('input#NroPatente').type('ad-455-ar');
    cy.get('#buscquedaSiniestrosDialog > .modal-footer > .btn-success').click();
    cy.wait(2000);  
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td.text-center').eq(6).should('have.text', 'ad-455-ar');
    });
    cy.get('table tbody tr').each(($row) => {
      cy.wrap($row).find('td.text-center').eq(4).should('have.text', 'e4yae4ttt');
    });
    
  });


 
});

