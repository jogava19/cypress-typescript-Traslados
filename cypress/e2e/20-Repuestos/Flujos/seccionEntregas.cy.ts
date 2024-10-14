import { login,filtroIdclaims,altaSiniestro} from "../../support/utils";

describe('Flujo entregas y sus diferentes acciones', () => {
    //fecha aleatoria para setear en la cotizacion
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 3); // Configura la fecha a 7 días después de hoy
    const day = String(nextWeek.getDate()).padStart(2, '0');
    const month = String(nextWeek.getMonth() + 1).padStart(2, '0'); // Los meses son indexados desde 0
    const year = nextWeek.getFullYear();
    const formattedDate = `${day}/${month}/${year}`; // Formatea la fecha en DD/MM/YYYY
    //Datos predefinidos
    const asegurados= 'Juan zaya'; 
    const nroSiniestros= Math.floor(Math.random() * 1000000); // Ajusta el rango del nro de siniestro aleatorio
    const nroPoliza= '62345234'; 
    const mail= 'juan_denis1999@live.com.ar'; 
    const credentials = btoa('WSREP_LACAJA:82564eC326fa331e1ee2ef242b6ce32d5ebfdc07d419fa22de'); // Reemplaza 'tuUsuario' y 'tuContraseña' con tus credenciales
   
    it('Alta Siniestro y cotización', () => {
  
      altaSiniestro().then((responseIdClaims) => {
          cy.log(`ID de Licitación es: ${responseIdClaims}`);
          login('ccomerci', '1234La');
          cy.get(':nth-child(4) > .ajax-link').click();
          cy.get('#btnFiltrar').click().wait(3000);
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
    it('Cierre anticipado', () => {
      const responseIdClaims = Cypress.env('responseIdClaims');
        login('pcolonel', '1234La');
        filtroIdclaims(responseIdClaims);
        cy.wait(1000); 
        //cy.get('.fa.fa-plus-square.fa-1x.btnDetallesLicitacion.icon-accion', { multiple: true }).click();
        cy.get('.fa.fa-plus-square.fa-1x.btnDetallesLicitacion.icon-accion').click();

        cy.get(':nth-child(8) > .btn').click();
         cy.wait(1000); 
        cy.get('#txtJustificacion').type('test de automation');
        cy.get('.swal2-confirm').click();
        cy.get('span.label-info.label.label-estados').should('have.text', 'Licitada'); // Verifica que el texto del elemento sea exactamente 'Licitada'


    }); 
    it('Adjudicar', () => {
      const responseIdClaims = Cypress.env('responseIdClaims');
        login('pcolonel', '1234La');
        filtroIdclaims(responseIdClaims);
        cy.wait(2000); 
        cy.get('.fa.fa-bars.fa-1x.btnAdjudicarLicitacion.icon-accion').click().wait(2000);
        cy.wait(6000); 
        cy.get('#presupuestos-generados-1-tab > div > div > div:nth-child(1) > div > div > div > div.footer.row > div.col-md-8 > a.Cbtn.Cbtn-primary.btElegirPresupuesto').click();
        cy.get('.select2-arrow > b').click();
        cy.get('#s2id_autogen15_search').type('Tiempo{enter}').wait(2000);
        cy.get('.swal2-confirm').click().wait(2000);
        cy.get('span.label-success.label.label-estados').should('have.text', 'Adjudicada'); // Verifica que el texto del elemento sea exactamente 'Adjudicada'

    });

    it('Agendar/re-Agendar', () => {
      const responseIdClaims = Cypress.env('responseIdClaims');
        login('ccomerci', '1234La');
        cy.get(':nth-child(6) > .ajax-link').click();
        cy.get('button#btnFiltroPendientes').click().wait(2000);
        cy.get('input#IdSiniestro').type(responseIdClaims).wait(2000);
        cy.get('button.btnAplicarFiltrospendientes').click().wait(2000);
        cy.get('i.fa.fa-plus-square.btnDetail.icon-accion').first().click({ force: true }).wait(2000);; // Realiza el clic en el elemento 
        cy.get('.chkAccion').eq(0).click().wait(2000) ; // Selecciona el primer checkbox
        cy.get('#btnAgendar').click().wait(2000);
        cy.get('#form0 > .modal-footer > .btn').click().wait(2000);
        cy.get('span.label-yellow.label').should('have.text', 'PendienteAgendado'); // Verifica que el texto del elemento sea exactamente 'Agendado'
        cy.get('.chkAccion').eq(0).click().wait(2000) ; // Selecciona el primer checkbox
        cy.get('button#btnReAgendar').click().wait(2000);
        cy.get('textarea[data-val="true"]').type('este es mi test de automation').wait(2000);
        cy.contains('button', 'Re-Agendar').click();
        cy.get('span.label-warning.label').should('contain.text', 'Re-Agendado'); // Verifica que el texto del elemento contenga 'Re-Agendado'
        cy.get('i.fa.fa-times-circle-o.btnAnularAdjudicacion').first().click({ force: true }).wait(2000); 
        cy.get('textarea[name="notivo"]').type('Esta es mi descripcion de automation para la anulacion').wait(2000);
        cy.contains('a', 'Solicitar').click().wait(2000); 
        cy.get('span.label-yellow.label').should('have.text', 'PendientePedido Anulación'); // Verifica que el texto del elemento sea exactamente 'Pedido Anulación'
    }); 

    

  });

    
 

  