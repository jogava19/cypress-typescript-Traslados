import { login, logout } from "../../support/utils";
const contraseña = '1234La';
const usuario = 'coplussspv';
const Filtrar = '#btnFiltrar-todos';
const Limpiar = '.btn-secondary'
const minTime = 600000; // 6000000 - 10 minutos en ms
const maxTime = 1200000; // 1200000 - 20 minutos en ms
const randomWait = Math.floor(Math.random() * (maxTime - minTime + 1)) + minTime;
describe('Login', () => {
  it ('Aleatorio', () => {
    login(usuario,contraseña);
    cy.wait(randomWait);
    logout
  });
});