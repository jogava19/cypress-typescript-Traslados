import { login } from "../../../support/utilsPROD";
const contraseña = '1234La';
const contraseñaLa = '1234lA';
const coordinadorPlus = 'coplussspv';
const coordinador = 'coordinador';
const AdministradorSiniestros = 'adminsiniestrosspv';
const MedicoAuditor = 'medaudisspv';

describe('SolicitaAuditoriaMedicaYConfirma', () => {

    it ('CoordinadorSolicita', () => {
      login(coordinador,contraseñaLa);
      cy.wait(1500);
      cy.get(':nth-child(2) > .header').click();
      cy.get('[href="#/gestion/siniestros"]').click();
      cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('314955');
      cy.contains('a', '314955 / 0').click();
      cy.get('#tab-auditoria-medica-link > span').click();
      cy.get('.card-body > .row > .col-md-6 > .float-left > .btn').click();
      cy.get('.modal-body > .form-control').type('Solicitado por Cypress');
      cy.get('.modal-footer > button.btn').click();
      }); 

      it ('MedicoAuditorInhabilita', () => {
        login(MedicoAuditor,contraseñaLa);
        cy.wait(1500);
        cy.get(':nth-child(2) > .header').click();
        cy.get('[href="#/gestion/siniestros"]').click();
        cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('314955');
        cy.contains('a', '314955 / 0').click().wait(1500);
        cy.get('#tab-auditoria-medica-link > span').click();
        cy.get('.col-md-3 > .form-control > .ng-select-container > .ng-arrow-wrapper').click().wait(1000);
        cy.contains('span.ng-option-label', 'Inhabilitado').should('be.visible').click();
        cy.get('.card-body > :nth-child(1) > .mb-3 > .col-md-4 > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
        cy.contains('Otros').should('be.visible').click();
        cy.get('.col > .form-control').type('Inhabilitado por Cypress');
        cy.get('.mt-3 > .btn').click().wait(3333);
    });
  });