import { login, logout } from "../../../support/utilsPROD";
const contraseña = '1234La';
const usuario = 'coplussspv';
const idtraslado = 1179300;


describe('AccionesTraslados', () => {
  
    it ('CamposYDesvios', () => {
      cy.viewport(1920, 1080);
      login(usuario,contraseña);
      cy.wait(1500);
      cy.get(':nth-child(2) > .header').click();
      cy.get('[href="#/gestion/traslados"]').click();
      cy.get(':nth-child(1) > .input-group > .form-control').type((`${idtraslado}`)).wait(2000);
      cy.get('button.btn.btn-primary.btn-sm.iconoRueda').click();
      cy.get(':nth-child(2) > .dropdown-item').click();
      cy.get('.col-md-12 > .form-control').clear().type('esto se modifica por Automation')
      cy.get(':nth-child(1) > .row > :nth-child(2) > .form-row > .col-md-12 > ul > li > .form-control').clear().type('Automation Origen');
      cy.get(':nth-child(2) > .row > :nth-child(2) > .form-row > .col-md-12 > ul > li > .form-control').clear().type('Automation Origen');
      cy.get('#button-basic-traslados-0').click();
      cy.get(':nth-child(2) > .dropdown-item').click();
      cy.get('.modal-body > :nth-child(1) > :nth-child(1) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
      cy.get('span.ng-option-label.ng-star-inserted').contains('Vuelta').click();
      cy.get('.col > .input-group > .input-group-append > .btn > .ng-fa-icon').click();
      cy.get('.col-12 > .form-group > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').type('llavallol').wait(1000);
      cy.contains('span', 'LLAVALLOL').should('be.visible').click();
      cy.get('.col-12 > custom-switch.ng-untouched > .custom-control > .custom-control-label').click();
      cy.get(':nth-child(5) > .col-12 > .form-group > .form-control').clear().type('Estacion de Cypress Automation');
      cy.get('.col-12 > .btn').click().wait(1000);
      cy.get('.btnSeleccionar').click();
      cy.get(':nth-child(3) > .col > .form-control').clear().type('Estacion de Cypress Automation');
      cy.get('app-modal-traslados-intermedios > form.ng-touched > .modal-footer > button.btn').click();    
      cy.get('#button-basic-traslados-0').click();  //Desvio 2
      cy.get(':nth-child(2) > .dropdown-item').click();
      cy.get('.modal-body > :nth-child(1) > :nth-child(1) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
      cy.get(':nth-child(2) > .custom-control > .custom-control-label').click();
      cy.get(':nth-child(2) > .col > .form-control').clear().type('Pizzeria');
      cy.get('app-modal-traslados-intermedios > form.ng-touched > .modal-footer > button.btn').click().wait(1000);      
      cy.get('.modal-footer > button.btn').click();
      cy.get('app-modal-alerta-mensaje > .modal-footer > button.btn').click();
    }); 


    it ('VerDetalles', () => {
      cy.viewport(1920, 1080);
      login(usuario,contraseña);
      cy.wait(1500);
      cy.get(':nth-child(2) > .header').click();
      cy.get('[href="#/gestion/traslados"]').click();
      cy.get(':nth-child(1) > .input-group > .form-control').type(`${idtraslado}`).wait(2000);
      cy.get('button.btn.btn-primary.btn-sm.iconoRueda').click();
      cy.get(':nth-child(1) > .dropdown-item').click();
      cy.contains(':nth-child(1) > :nth-child(1) > .content > .card > .card2', (`${idtraslado}`)).should('be.visible');



    });
     }); 
