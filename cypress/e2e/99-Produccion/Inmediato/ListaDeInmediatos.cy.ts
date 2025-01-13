import { login } from "../../../support/utilsPROD";
const contraseña = '1234La';
const usuario = 'coplussspv';
const contraseñaprest = '1234lA';
const usuarioprest = 'redtsspv';
const contraseñaprest2 = '1234lA';
const usuarioprest2 = 'brownsspv';

describe('AltaYAnulacion', () => {
  it ('AltaInmediatoYAnulaInmediato', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    cy.wait(1500);
    cy.get(':nth-child(2) > .header').click();
    cy.get('[href="#/gestion/siniestros"]').click();
    cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('554886').wait(2000);
    cy.get(':nth-child(3) > :nth-child(1) > a').click().wait(3333);
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .float-left > .btn').click();
    cy.get('.float-right > custom-switch.ng-untouched > .custom-control > .custom-control-label').click();
    cy.get('.modal-footer > button.btn').click().wait(3333);
    cy.get(':nth-child(1) > .acciones > acciones-traslado > .btn-group > #button-basic').click();//opciones traslado
    cy.get(':nth-child(4) > .dropdown-item').click();
    cy.get('.ng-star-inserted > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click().type('{enter}');
    cy.get('.firstinfo > :nth-child(2) > .form-control').type('Se anula por Cypress');
    cy.get('.modal-footer > button.btn').click().wait(5555);
  }); 
});

describe('InmediatoSinRes', () => {
  it ('InmediatoSinResolución', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    cy.wait(1500);
    cy.get(':nth-child(2) > .header').click();
    cy.get('[href="#/gestion/siniestros"]').click();
    cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('554886').wait(2000);
    cy.get(':nth-child(3) > :nth-child(1) > a').click().wait(4444);
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .float-left > .btn').click();
    cy.get('.float-right > custom-switch.ng-valid > .custom-control > .custom-control-label').click();
    cy.get('form.ng-untouched > .modal-footer > button.btn').click().wait(4444);
  }); 
});

describe('InmediatoConParticipante', () => {
  it ('Inmediato', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    cy.wait(1500);
    cy.get(':nth-child(2) > .header').click();
    cy.get('[href="#/gestion/siniestros"]').click();
    cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('585237').wait(2000);
    cy.get(':nth-child(3) > :nth-child(1) > a').click().wait(9999);
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .float-left > .btn').click();
    cy.get('.float-right > custom-switch.ng-valid > .custom-control > .custom-control-label').click();
    cy.get('form.ng-untouched > .modal-footer > button.btn').click().wait(4444);
  }); 

  it ('ParticipanteAcepta', () => {
    cy.viewport(1920, 1080);
    login(usuarioprest,contraseñaprest);
    cy.wait(1500);
    cy.get('#button-basic').click();
    cy.get(':nth-child(2) > .dropdown-item').click();
    cy.get('.col > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('span.ng-option-label.ng-star-inserted').contains('1 - 15 min').click();
    cy.get(':nth-child(2) > .col > .form-control').type('Automation');
    cy.get('[type="submit"]').click().wait(4444);
  }); 

  it ('ParticipanteRechaza', () => {
    cy.viewport(1920, 1080);
    login(usuarioprest2,contraseñaprest2);
    cy.wait(1500);
    cy.get('#button-basic').click();
    cy.get(':nth-child(3) > .dropdown-item').click();
    cy.get('.firstinfo > .ng-star-inserted > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
    cy.contains('span', 'Sin Disponiblidad').click();
    cy.get(':nth-child(2) > .form-control').type('Automation');
    cy.get('.modal-footer > button.btn').click().wait(4444);

    
  }); 
});