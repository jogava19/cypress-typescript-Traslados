import { filtroAjustadorPorEstado, login } from "../../../../support/utils2";
const idClaims= '21614'; 
const nroSiniestro= 'ea4tgyuu'; 
const usuario='ajustadorsspv'
const contraseña='1234La'
const idClaimsTercero='21715'
function navegarAbrirFiltro() {
  cy.get('#mainMenu > :nth-child(4) > .ajax-link > span').click();
  cy.get('#btnFiltrar').click();
  cy.wait(2000); 
}

/*
describe('Filtros Ajustador', () => {
 it('Filtro idClaims', () => {
    login(usuario,contraseña);
    navegarAbrirFiltro()
    cy.get('#IdSiniestro').type(idClaims);
    cy.wait(2000); 
    cy.get('#filtrarSiniestros').click();
    cy.wait(2000); 
    cy.get('table tbody tr.odd').each(($row) => {
       cy.wrap($row).find('td.center.sorting_1').eq(0).should('have.text', idClaims);
    });
  });
 
 
  it('Filtro nroSiniestro', () => {
    login(usuario,contraseña);
    navegarAbrirFiltro()
    cy.get('#NroSiniestro').type(nroSiniestro);
    cy.wait(2000); 
    cy.get('#filtrarSiniestros').click();
    cy.wait(2000); 
    cy.get('table tbody tr.odd').each(($row) => {
        cy.wrap($row).find('td').eq(4).should('have.text', nroSiniestro);
 
     });
  });

   /*
  it('Filtro estadoAdjudicado', () => {
    login(usuario,contraseña);
       filtroAjustadorPorEstado('ADJUDICADO')
    cy.get('table tbody tr.odd').each(($row) => {
      cy.wrap($row).find('td.center-text').eq(6).should('have.text', 'Adjudicada');

   }); 
  });
    */

  it('Filtro estadoAnulado', () => {
    login(usuario,contraseña);
    filtroAjustadorPorEstado('ANULADO')
    cy.get('table tbody tr.odd').each(($row) => {
      cy.wrap($row).find('td.center-text').eq(6).invoke('text').then((text) => {
          expect(['Anulada - DT', 'Anulada']).to.include(text);
      });
  });
  /*
  });
    it('Filtro estadoLicitada', () => {
      login(usuario,contraseña);
      filtroAjustadorPorEstado('LICITADO')
      cy.get('table tbody tr.odd').each(($row) => {
        cy.wrap($row).find('td.center-text').eq(6).invoke('text').then((text) => {
            expect(['Licitada', 'Derivada']).to.include(text);
        });
    });
  
  });

    it('Filtro estadoLicitando', () => {
      login(usuario,contraseña);
      filtroAjustadorPorEstado('LICITANDO')
      cy.get('table tbody tr.odd').each(($row) => {
        cy.wrap($row).find('td.center-text').eq(6).should('have.text', 'Licitando');
  
     }); 
  });
  it('Filtro estadoPendiente', () => {
    login(usuario,contraseña);
    filtroAjustadorPorEstado('PENDIENTE')
    cy.get('table tbody tr.odd').each(($row) => {
      cy.wrap($row).find('td.center-text').eq(6).should('have.text', 'Pendiente');

   }); 

});
it('Filtro estadoSinStock', () => {
  login(usuario,contraseña);
  filtroAjustadorPorEstado('SIN STOCK')
  cy.get('table tbody tr.odd').each(($row) => {
    cy.wrap($row).find('td.center-text').eq(6).should('have.text', 'SIN STOCK');

 }); 

});
it('Filtro estadoDerivado', () => {
  login(usuario,contraseña);
  filtroAjustadorPorEstado('DERIVADO')
  cy.get('table tbody tr.odd').each(($row) => {
    cy.wrap($row).find('td.center-text').eq(6).should('have.text', 'Derivada');

 }); 

});
it('Filtro provincia', () => {
  login('ajustadorsspv', '1234La');
  cy.get('#mainMenu > :nth-child(4) > .ajax-link > span').click();
  cy.get('#btnFiltrar').click();
  cy.wait(2000); 
  cy.get('#s2id_Provincia > .select2-choice > .select2-arrow > b').click();
  cy.get('#s2id_autogen6_search').type('CAPITAL FEDERAL{enter}');
  cy.get('#filtrarSiniestros').click();
  cy.get(':nth-child(1) > .actions > #btnQuery').click();
  cy.get('#select2-chosen-69').should('have.text', 'CAPITAL FEDERAL');

}); 
it('Filtro patente', () => {
  login('ajustadorsspv', '1234La');
  cy.get('#mainMenu > :nth-child(4) > .ajax-link > span').click();
  cy.get('#btnFiltrar').click();
  cy.wait(2000); 
  cy.get(':nth-child(8) > div.col-md-6 > .input-group > .input-group-btn > #btnTipoPatente > .caret').click();
  cy.get('#form0 > div.modal-body > div.row > div:nth-child(8) > div > div > div > ul > li:nth-child(2) > a').click();
      cy.wait(2000); 
  cy.get('input[name="NroPatente"]').eq(1).type('AA-526-LL');
  cy.get('#filtrarSiniestros').click();
  cy.wait(2000); 
  cy.get('table tbody tr.odd').each(($row) => {
    cy.wrap($row).find('td.center-text').eq(5).should('have.text', 'AA-526-LL');
  });
});  

it('Filtro patente', () => {
  login('ajustadorsspv', '1234La');
  cy.get('#mainMenu > :nth-child(4) > .ajax-link > span').click();
  cy.get('#btnFiltrar').click();
  cy.wait(2000); 
  cy.get('#s2id_Reclamante > .select2-choice > .select2-arrow > b').click();
  cy.get('#s2id_autogen7_search').type('TERCERO{enter}');
  cy.get('#filtrarSiniestros').click();
  cy.get('#btnQuery').click();
  cy.get('.aseguradoTab > a').click();
  cy.get('#select2-chosen-34').should('have.text', 'Tercero');

});  
it('Filtro tercero', () => {
  login('ajustadorsspv', '1234La');
  cy.get('#mainMenu > :nth-child(4) > .ajax-link > span').click();
  cy.get('#btnFiltrar').click();
  cy.wait(2000); 
  cy.get('#IdSiniestro').type(idClaimsTercero);
  cy.get('#s2id_Reclamante > .select2-choice > .select2-arrow > b').click();
  cy.get('#s2id_autogen7_search').type('TERCERO{enter}');
  cy.get('#filtrarSiniestros').click();
  cy.get('#btnQuery').click();
  cy.get('.aseguradoTab > a').click();
  cy.get('#select2-chosen-34').should('have.text', 'Tercero');

});  
    */ 
});

 
