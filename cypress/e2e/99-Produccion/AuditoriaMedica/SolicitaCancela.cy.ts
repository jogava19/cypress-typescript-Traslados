import { login } from "../../../support/utilsPROD";
const contraseña = '1234La';
const contraseñaLa = '1234lA';
const coordinadorPlus = 'coplussspv';
const coordinador = 'coordinador';
const AdministradorSiniestros = 'adminsiniestrosspv';
const MedicoAuditor = 'medaudisspv';

describe('SolicitaAuditoriaMedicaYConfirma', () => {

    it ('Coordinador', () => {
      login(coordinador,contraseñaLa);
      cy.wait(1500);
      cy.get(':nth-child(2) > .header').click();
      cy.get('[href="#/gestion/siniestros"]').click();
      cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('314955');
      cy.contains('a', '314955 / 0').click();
      cy.get('#tab-auditoria-medica-link > span').click();
      cy.get('.card-body > .row > .col-md-6 > .float-left > .btn').click();
      cy.get('.modal-body > .form-control').type('Solicitado por Cypress');
      cy.get('.modal-footer > button.btn').click().wait(2000);
      cy.get('span.ng-star-inserted > .btn').click();
      cy.get('.modal-footer > button.btn').click();
         
    });
  });