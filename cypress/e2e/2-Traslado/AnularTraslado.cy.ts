import { login, logout } from "../../support/utils";
const contraseña = '1234La';
const usuario = 'coplussspv';


describe('Alta y anulación', () => {
  it ('Alta', () =>  {
    login(usuario,contraseña);
    cy.wait(1500);
    cy.get(':nth-child(2) > .header').click();
    cy.get('[ng-reflect-router-link="gestion,siniestros"]').click();
    cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('197928').wait(2000);
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
    login(usuario,contraseña);
    cy.wait(1500);
    cy.get(':nth-child(2) > .header').click();
    cy.get('[ng-reflect-router-link="gestion,traslados"]').click();
    cy.get(':nth-child(2) > .input-group > .form-control').type('197928').wait(2000);
    cy.get(':nth-child(1) > :nth-child(4) > :nth-child(1) > a').click().wait(10000);
    cy.get(':nth-child(1) > .acciones > acciones-traslado > .btn-group > #button-basic').click();
    cy.get(':nth-child(4) > .dropdown-item').click();
    cy.get('.ng-star-inserted > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('span.ng-option-label').contains('Decisión operativa').click();
    cy.get('.firstinfo > :nth-child(2) > .form-control').clear().type('Automation');
    cy.get('.modal-footer > button.btn').click();   
  }); 
});