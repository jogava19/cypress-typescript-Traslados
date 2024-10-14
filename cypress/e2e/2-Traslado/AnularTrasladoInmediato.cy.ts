import { login, logout } from "../../support/utils";
const contraseña = '1234La';
const usuario = 'coplussspv';


describe('Siniestros', () => {
  it ('AltaTraslados', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    cy.wait(1500);
    cy.get(':nth-child(2) > .header').click();
    cy.get('[ng-reflect-router-link="gestion,siniestros"]').click();
    cy.get('.col-10 > .row > :nth-child(2) > .form-control').type('197928').wait(2000);
    cy.get(':nth-child(3) > :nth-child(1) > a').click().wait(9999);
    cy.get(':nth-child(1) > .acciones > acciones-traslado > .btn-group > #button-basic').click();
    cy.get(':nth-child(4) > .dropdown-item').click();
    cy.get('.ng-star-inserted > .form-control > .ng-select-container > .ng-value-container > .ng-input').click();
    cy.get('span[ng-reflect-ng-item-label="Decisión operativa"]').click();
    cy.get('.firstinfo > :nth-child(2) > .form-control').type('Se anula desde Automation');
    cy.get('.modal-footer > button.btn').click();

  }); 
});