import { login, logout } from "../../support/utils";
const contraseña = '1234La';
const usuario = 'coplussspv';
const idtraslado = '197928';


describe('Siniestros', () => {
  it ('AltaTraslados', () => {
    login(usuario,contraseña);
    cy.get(':nth-child(2) > .header').click();
    cy.get('[ng-reflect-router-link="gestion,siniestros"]').click();
    cy.get('.col-10 > .row > :nth-child(2) > .form-control').type(`${idtraslado}`).wait(1000);
    cy.get(':nth-child(3) > :nth-child(1) > a').click().wait(3000);
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .float-left > .btn').click();
    cy.get('.modal-footer > button.btn').click();
    cy.get('.row > :nth-child(1) > .btn').click();
    cy.get('.days > tbody > :nth-child(4) > :nth-child(5) > .ng-star-inserted').click();
    cy.get('.dates-overflow > .form-row > .col-3 > .form-control').type('1200').wait(2000);
    cy.get('form.ng-dirty > .modal-footer > button.btn').click();
    cy.get('form.ng-untouched > .modal-footer > button.btn').click();

  });
});