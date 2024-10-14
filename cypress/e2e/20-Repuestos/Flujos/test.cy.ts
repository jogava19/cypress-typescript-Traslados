import { altaSiniestro, filtroAjustadorPorEstado, login, logout,filtroIdclaims} from '../../support/utils';
//fecha aleatoria para setear en la cotizacion
const today = new Date();
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 3); // Configura la fecha a 7 días después de hoy
const day = String(nextWeek.getDate()).padStart(2, '0');
const month = String(nextWeek.getMonth() + 1).padStart(2, '0'); // Los meses son indexados desde 0
const year = nextWeek.getFullYear();
const formattedDate = `${day}/${month}/${year}`; // Formatea la fecha en DD/MM/YYYY
describe('Pruebas de Siniestros', () => {
  it('Alta Siniestro y cotización', () => {
  
    altaSiniestro().then((responseIdClaims) => {
        cy.log(`ID de Licitación es: ${responseIdClaims}`);
        login('ccomerci', '1234La');
        cy.get(':nth-child(4) > .ajax-link').click();
        cy.get('#btnFiltrar').click().wait(2000);
        cy.get('#IdSiniestro').type(`${responseIdClaims}`).wait(2000);
        cy.get('#form0 > .modal-footer > .btn-primary').click();
        cy.get('#btnEditar').click();
        cy.get('input[data-val-number="The field CostoUnitario must be a number."]').eq(0).type('15000').wait(2000);
        cy.get('input[data-val-number="The field CostoUnitario must be a number."]').eq(1).type('25000').wait(2000);
        cy.get('#s2id_Repuestos_0__IdPlazoEntrega > a').click().wait(2000);
        cy.get('#s2id_autogen11_search').type('INMEDIATA{enter}').wait(2000);
        cy.get('#s2id_Repuestos_1__IdPlazoEntrega > a').click().wait(2000);
        cy.get('#s2id_autogen13_search').type('INMEDIATA{enter}').wait(2000);
        cy.get('#FechaMantenimientoCostos').type(`${formattedDate}{enter}`).wait(2000);
        cy.get('#form0 > div.modal-body > div.box-content > div.col-md-12.footer > div.col-md-6.text-right > button.btn.btn-success').click().wait(2000);
      });
      
  });

  });

