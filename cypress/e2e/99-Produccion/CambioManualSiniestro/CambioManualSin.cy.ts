import { login } from "../../../support/utilsPROD";
const contraseña = '1234La';
const contraseñaLa = '1234lA';
const coordinadorPlus = 'coplussspv';
const coordinador = 'coordinador';
const AdministradorSiniestros = 'adminsiniestrosspv';
const MedicoAuditor = 'medaudisspv';

describe('CambioManualPrestador', () => {

    it ('CoordinadorPlus', () => {
      cy.viewport(1920, 1080);
      login(coordinadorPlus,contraseña);
      cy.wait(1500);
      cy.get(':nth-child(2) > .header').click();
      cy.get('[href="#/gestion/siniestros"]').click();
      cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('314955');
      cy.contains('a', '314955 / 0').click();
      cy.get(':nth-child(2) > .text-darker').click();
      cy.get('.col > .form-control').type('Se cambia Manual por Cypress, Coplus');
      cy.get('[type="submit"]').click().wait(3000);
      }); 

      it ('AdministradorSiniestros', () => {
        cy.viewport(1920, 1080);
        login(AdministradorSiniestros, contraseña);
        cy.wait(1500);
        cy.get(':nth-child(2) > .header').click();
        cy.get('[href="#/gestion/siniestros"]').click();
        cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('314955');
        cy.contains('a', '314955 / 0').click();
        cy.get(':nth-child(2) > .text-darker').click();
        cy.get('.modal-body > .row > .col > .form-control').type('Se cambia Manual por Cypress, Administrador Siniestros');
        cy.get('.modal-footer > [type="submit"]').click().wait(3000);
        }); 

        it ('Coordinador', () => {
         cy.viewport(1920, 1080);
         login(coordinador, contraseñaLa);
          cy.wait(1500);
          cy.get(':nth-child(2) > .header').click();
          cy.get('[href="#/gestion/siniestros"]').click();
          cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('314955');
          cy.contains('a', '314955 / 0').click();
          cy.get('ul > :nth-child(2) > .btn').click();
          cy.get('.modal-header').should('contain', 'Historial de cambio manual de estado').wait(3000); // Verifica que contenga el texto
        });
        
        it ('MedicoAuditor', () => {
          cy.viewport(1920, 1080);
          login(MedicoAuditor, contraseñaLa);
           cy.wait(1500);
           cy.get(':nth-child(2) > .header').click();
           cy.get('[href="#/gestion/siniestros"]').click();
           cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('314955');
           cy.contains('a', '314955 / 0').click();
           cy.get('ul > :nth-child(2) > .btn').click();
           cy.get('.modal-header').should('contain', 'Historial de cambio manual de estado').wait(3000); // Verifica que contenga el texto
         });
 
    });

