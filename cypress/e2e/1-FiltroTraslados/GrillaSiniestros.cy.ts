import { login, logout } from "../../support/utils";
const contraseña = '1234La';
const usuario = 'coplussspv';
const Filtrar = '#btnFiltrar-todos';
const Limpiar = '.btn-secondary'
function abrirFiltro () {
  cy.get(':nth-child(2) > .header').click();
  cy.get('[href="#/gestion/siniestros"]').click();
  cy.get('#headingOne > .btn').click();  
};


describe('Siniestros', () => {
  it ('NroSiniestro', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro();
    cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('374679').wait(2000);
  });
});



describe('Siniestros', () => {
  it ('Paciente', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro();
    cy.get('.pr-4 > .form-control').type('LEDEZMA').wait(2000);
  });
});


describe('Siniestros', () => {
  it ('Empleador', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro();
    cy.get(':nth-child(2) > :nth-child(3) > .form-control').type('tristan');
    cy.get('.font-size-resp').click();
    cy.get('#btnFiltrar').click();
  });
});


describe('Siniestros', () => {
  it ('PrestadorMedico', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro();
cy.get('input[placeholder="Busque al prestador"]').click().type('federa');
cy.get('.font-size-resp').click();
cy.get('#btnFiltrar').click().wait(2000);
  });
});


describe('Siniestros', () => {
  it ('AdministradorSiniestro', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro();
    cy.get(':nth-child(2) > :nth-child(1) > .form-control > .ng-select-container').click();
    cy.contains('GRUPO1').should('be.visible').click(); // Interactúa con el elemento
    cy.get(':nth-child(2) > :nth-child(1) > .form-control > .ng-select-container').click();
    cy.contains('GRUPO13').should('be.visible').click().wait(2000);
  });
});


describe('Siniestros', () => {
  it ('MedicoAuditor', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro();
    cy.get(':nth-child(2) > :nth-child(2) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.contains('JLTOVAR').should('be.visible').click().wait(2000);
    cy.get(':nth-child(2) > :nth-child(2) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.contains('MGIUGGE').should('be.visible').click().wait(2000);
  });
});

describe('Siniestros', () => {
  it ('EstadosAuditoria', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro();
    cy.get(':nth-child(3) > :nth-child(1) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.contains('Pendiente').should('be.visible').click().wait(2000);
    cy.get(':nth-child(3) > :nth-child(1) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.contains('(Habilita Traslados)').should('be.visible').click().wait(2000);
    cy.get(':nth-child(3) > :nth-child(1) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.contains('(Inhabilita Traslados)').should('be.visible').click().wait(2000);
  });
});

describe('Siniestros', () => {
  it ('TipoSiniestro', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro();
    cy.get(':nth-child(3) > :nth-child(2) > .form-control > .ng-select-container > .ng-value-container').click();
    cy.contains('Todos').should('be.visible').click()
    cy.get('#btnFiltrar').click().wait(2000);
    cy.get(':nth-child(3) > :nth-child(2) > .form-control > .ng-select-container > .ng-value-container').click();
    cy.contains('ART').should('be.visible').click();
    cy.get('#btnFiltrar').click().wait(2000);
    cy.get(':nth-child(3) > :nth-child(2) > .form-control > .ng-select-container > .ng-value-container').click();
    cy.contains('AP').should('be.visible').click();
    cy.get('#btnFiltrar').click().wait(2000);
  });
});

describe('Siniestros', () => {
  it ('Checks', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro();
    cy.get(':nth-child(3) > custom-switch.ng-valid > .custom-control > .custom-control-label').click();
    cy.get('#btnFiltrar').click().wait(2000);
    cy.get('.btn-secondary').click().wait(2000);
    cy.get(':nth-child(4) > custom-switch.ng-valid > .custom-control > .custom-control-label').click();
    cy.get('#btnFiltrar').click().wait(2000);
    cy.get('.btn-secondary').click().wait(2000);
    cy.get(':nth-child(5) > custom-switch.ng-valid > .custom-control > .custom-control-label').click();
    cy.get('#btnFiltrar').click().wait(2000);
    cy.get('.btn-secondary').click().wait(2000);
  });
});