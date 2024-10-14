import { login, logout } from "../../support/utils";
const contraseña = '1234La';
const usuario = 'coplussspv';


describe('Siniestros', () => {
  it ('AltaTraslados', () => {
    login(usuario,contraseña);
    cy.wait(1500);
    cy.get(':nth-child(2) > .header').click();
    cy.get('[ng-reflect-router-link="gestion,siniestros"]').click();
    cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('197928').wait(2000);
    cy.get(':nth-child(3) > :nth-child(1) > a').click().wait(9999);
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .float-left > .btn').click();
    cy.get('.modal-footer > button.btn').click();
    cy.get('.float-right > custom-switch.ng-valid > .custom-control > .custom-control-label').click();
    cy.get('form.ng-untouched > .modal-footer > button.btn').click();
  }); 
});