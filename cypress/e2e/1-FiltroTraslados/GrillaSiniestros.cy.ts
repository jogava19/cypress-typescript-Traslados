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
    login(usuario,contraseña);
    abrirFiltro();
    cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('374679').wait(2000);
  });
});



describe('Siniestros', () => {
  it ('Paciente', () => {
    login(usuario,contraseña);
    abrirFiltro();
    cy.get('.pr-4 > .form-control').type('LEDEZMA').wait(2000);
  });
});


describe('Siniestros', () => {
  it ('Empleador', () => {
    login(usuario,contraseña);
    abrirFiltro();
    cy.get(':nth-child(2) > :nth-child(3) > .form-control').type('tristan');
    cy.get('.font-size-resp').click();
    cy.get('#btnFiltrar').click();
  });
});


describe('Siniestros', () => {
  it ('Paciente', () => {
    login(usuario,contraseña);
    abrirFiltro();
cy.get('input[placeholder="Busque al prestador"]').click().type('federa');
cy.get('.font-size-resp').click();
cy.get('#btnFiltrar').click().wait(2000);
  });
});


describe('Siniestros', () => {
  it ('Paciente', () => {
    login(usuario,contraseña);
    abrirFiltro();
    
  });
});