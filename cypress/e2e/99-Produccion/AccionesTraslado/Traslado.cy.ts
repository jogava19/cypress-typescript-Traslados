import { login } from "../../../support/utilsPROD";
const contraseña = '1234La';
const usuario = 'coplussspv';
const idtraslado = 1292518;

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
      cy.contains(':nth-child(1) > :nth-child(1) > .content > .card > .card2', (`${idtraslado}`)).should('be.visible');
      cy.contains('.modal-header', (`${idtraslado}`)).should('be.visible');
      cy.contains('.text-truncate', 'esto se modifica por Automatio').should('be.visible').wait(3000);
    });

    it ('AgregarNotaPublicaYPrivada', () => {
      cy.viewport(1920, 1080);
      login(usuario,contraseña);
      cy.wait(1500);
      cy.get(':nth-child(2) > .header').click();
      cy.get('[href="#/gestion/traslados"]').click();
      cy.get(':nth-child(1) > .input-group > .form-control').type(`${idtraslado}`).wait(2000);
      cy.get('button.btn.btn-primary.btn-sm.iconoRueda').click();
      cy.get(':nth-child(1) > .dropdown-item').click();
      cy.get('.float-left > .btn').click();
      cy.get('.col > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
      cy.get('span.ng-option-label').contains('Pública').click();
      cy.get('.col-12 > .form-control').clear().type('Nota Pub x Cypess');
      cy.get('.modal-footer > button.btn').click();

      cy.get('.float-left > .btn').click();//Nota Privada
      cy.get('.col > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
      cy.get('span.ng-option-label').contains('Privada').click();
      cy.get('.col-12 > .form-control').clear().type('Nota Priv x Cypess');
      cy.get('.modal-footer > button.btn').click();

      cy.get(':nth-child(1) > :nth-child(4) > .btn').click();
      cy.get(':nth-child(3) > :nth-child(4) > .btn').click();
     });

     it ('AgregarReclamo', () => {
      cy.viewport(1920, 1080);
      login(usuario,contraseña);
      cy.wait(1500);
      cy.get(':nth-child(2) > .header').click();
      cy.get('[href="#/gestion/traslados"]').click();
      cy.get(':nth-child(1) > .input-group > .form-control').type(`${idtraslado}`).wait(2000);
      cy.get('button.btn.btn-primary.btn-sm.iconoRueda').click();
      cy.get(':nth-child(1) > .dropdown-item').click();
      cy.get('#tab-traslados-reclamos-link').click();
      cy.get('#headingOne > .btn').click();
      cy.get(':nth-child(1) > :nth-child(1) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
      cy.get('.ng-option-label').click();
      cy.get('.mb-3 > :nth-child(1) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
      cy.contains('span', 'El móvil no se presentó en origen').click();
      cy.get('.col-12 > .form-control').type('Reclamo x Cypress');
      cy.get('.modal-footer > button.btn').click();
      cy.get(':nth-child(6) > .btn').click().wait(1500);
      });

      it ('AgregarReducirHsEspera', () => {
        cy.viewport(1920, 1080);
        login(usuario,contraseña);
        cy.wait(1500);
        cy.get(':nth-child(2) > .header').click();
        cy.get('[href="#/gestion/traslados"]').click();
        cy.get(':nth-child(1) > .input-group > .form-control').type(`${idtraslado}`).wait(2000);
        cy.get('button.btn.btn-primary.btn-sm.iconoRueda').click().wait(1000);
        cy.get(':nth-child(4) > .dropdown-item').click().wait(1000);
        cy.get('.modal-footer > button.btn').click().wait(1000);
        cy.get('button.btn.btn-primary.btn-sm.iconoRueda').click().wait(1000);
        cy.get(':nth-child(4) > .dropdown-item').click().wait(1000);
        cy.get('.modal-footer > button.btn').click().wait(1000).wait(1000);
        cy.get('button.btn.btn-primary.btn-sm.iconoRueda').click().wait(1000);
        cy.get(':nth-child(5) > .dropdown-item').click().wait(1000);
        cy.get('.modal-footer > button.btn').click().wait(1000);
    });
  });

  describe('Alta y anulación', () => {
    it ('Alta', () =>  {
      cy.viewport(1920, 1080);
      login(usuario,contraseña);
      cy.wait(1500);
      cy.get(':nth-child(2) > .header').click();
      cy.get('[href="#/gestion/siniestros"]').click().wait(10000);
      cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('533487').wait(2000);
      cy.get(':nth-child(3) > :nth-child(1) > a').click().wait(9999);
      cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .float-left > .btn').click();
      cy.get('.modal-footer > button.btn').click();
      cy.get('.row > :nth-child(1) > .btn').click();
      cy.get(':nth-child(4) > :nth-child(7) > .custom-sunday').click();
      cy.get('.dates-overflow > .form-row > .col-3 > .form-control').type('0000').wait(1000);
      cy.get('form.ng-dirty > .modal-footer > button.btn').click();
      cy.get('form.ng-untouched > .modal-footer > button.btn').click();
    }); 
  
    it ('Anular', () => {
      cy.viewport(1920, 1080);
      login(usuario,contraseña);
      cy.wait(1500);
      cy.get(':nth-child(2) > .header').click();
      cy.get('[href="#/gestion/siniestros"]').click().wait(10000);
      cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('533487').wait(2000);
      cy.get(':nth-child(3) > :nth-child(1) > a').click().wait(10000);
      cy.get(':nth-child(1) > .acciones > acciones-traslado > .btn-group > #button-basic').click();
      cy.get(':nth-child(4) > .dropdown-item').click();
      cy.get('.ng-star-inserted > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
      cy.get('span.ng-option-label').contains('Decisión operativa').click();
      cy.get('.firstinfo > :nth-child(2) > .form-control').clear().type('Automation');
      cy.get('.modal-footer > button.btn').click();   
    }); 
  });