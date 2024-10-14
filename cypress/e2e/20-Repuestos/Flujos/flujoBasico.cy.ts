import { login,filtroIdclaims,altaSiniestro} from "../../support/utils";
// En tu archivo support/index.ts o support/index.js

describe('Flujo completo Alta siniestro hasta Facturacion', () => {
    //fecha aleatoria para setear en la cotizacion
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 3); // Configura la fecha a 7 días después de hoy
    const day = String(nextWeek.getDate()).padStart(2, '0');
    const month = String(nextWeek.getMonth() + 1).padStart(2, '0'); // Los meses son indexados desde 0
    const year = nextWeek.getFullYear();
    const formattedDate = `${day}/${month}/${year}`; // Formatea la fecha en DD/MM/YYYY
    //Datos predefinidos
    const nroVenta: number=Math.floor(Math.random() * 1000);
    const nroComprobante: number=Math.floor(Math.random() * 10000000);
    let nroComprobanteStr: string = nroComprobante.toString();
    let nroVentaStr: string = nroVenta.toString();

   
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

    }); 
    it('Adjudicar', () => {
      const responseIdClaims = Cypress.env('responseIdClaims');
        login('pcolonel', '1234La');
        filtroIdclaims(responseIdClaims);
        cy.wait(2000); 
        cy.get('.fa.fa-bars.fa-1x.btnAdjudicarLicitacion.icon-accion').click().wait(2000);
        cy.wait(4000); 
        cy.get('#presupuestos-generados-1-tab > div > div > div:nth-child(1) > div > div > div > div.footer.row > div.col-md-8 > a.Cbtn.Cbtn-primary.btElegirPresupuesto').click();
        cy.get('.select2-arrow > b').click();
        cy.get('#s2id_autogen15_search').type('Tiempo{enter}').wait(2000);
        cy.get('.swal2-confirm').click().wait(2000);
        cy.wait(2000); 
    }); 
    it('EntregarRepuesto', () => {
      const responseIdClaims = Cypress.env('responseIdClaims');
      cy.viewport(1280, 720);
        login('pcolonel', '1234La');
        cy.get('#mainMenu > :nth-child(5) > .ajax-link').click();
        cy.get('#btnFiltroPendientes').click().wait(2000);
        cy.get('#IdSiniestro').type(responseIdClaims).wait(2000);
        cy.get('#form0 > .modal-footer > .btn-primary').click().wait(2000);
        cy.get('.btnDetail.icon-accion').first().click().wait(2000); // Selecciona el primer elemento
        cy.get('.btnDetailP[data-original-title="Detalle Repuestos"]').click();
        cy.get('.chkAccion').eq(0).click().wait(2000) ; // Selecciona el primer checkbox
        cy.get('.chkAccion').eq(1).click().wait(2000) ; // Selecciona el segundo checkbox
        cy.get('#btnEntregar').click().wait(2000) ;
        cy.contains('button', 'Guardar').click().wait(2000) ;
    });
    it('Aprobar Documentacion', () => {
      const responseIdClaims = Cypress.env('responseIdClaims');
        cy.viewport(1280, 720);
          login('pcolonel', '1234La');
          cy.get('a[href="/Frontend/FacturacionTaller"]').click().wait(2000);
          cy.get('#btnFiltroAdjudicaciones').click().wait(2000) ;
          cy.get('#IdSiniestro').type(responseIdClaims).wait(2000) ;
          cy.get('#form0 > .modal-footer > .btn-primary').click().wait(2000);
          cy.get('i[data-original-title="Detalle"]', { timeout: 10000 }).click({ force: true }).wait(2000);
          cy.get('.chkAprobar[data-original-title="Marcar para APROBAR"]').click().wait(2000);
          cy.get('#btnAprobarEntregas').click().wait(2000) ;
          cy.get('[onclick="AdjudicacionesView.doAprobar();"]').click().wait(2000);
    });
    it('Cargar Factura', () => {
      const capturaNrosiniestro = Cypress.env('capturaNrosiniestro');

            cy.viewport(1280, 720);        
            login('ccomerci', '1234La');        
            cy.get(':nth-child(8) > .ajax-link').click().wait(2000);
            cy.get('#tbFacturas').click().wait(2000);
            cy.get('#btnNueva').click().wait(2000);
            cy.get('#s2id_IdPrestador > .select2-choice > .select2-arrow > b').click().wait(2000);
            cy.get('#s2id_autogen5_search').type('alra VW2{enter}').wait(2000);
            cy.get('#s2id_IdAseguradora > .select2-choice > .select2-arrow > b').click().wait(2000);
            cy.get('#s2id_autogen2_search').type('LA CAJA{enter}').wait(2000);
            cy.get('#s2id_IdSiniestro > .select2-choice > .select2-arrow > b').click().wait(2000);
           cy.get('#s2id_autogen65_search').type(`${capturaNrosiniestro}{enter}`).wait(2000);
            cy.get('#s2id_Letra > .select2-choice > .select2-arrow > b').click().wait(2000);
            cy.get('#s2id_autogen6_search').type('A{enter}').wait(2000);
            cy.get('#PtVta').type(nroVentaStr).wait(2000);
            cy.get('#NroComprobante').type(nroComprobanteStr).wait(2000);
            
            // Adjuntar la imagen
            cy.get('input[type="file"]').attachFile('imagen.png').wait(2000); // El nombre del archivo debe coincidir con el nombre en fixtures
              cy.get('.btnGuardar').click();
            
     });

     /*it('Cargar Factura', () => {
      cy.viewport(1280, 720);        
      login('pcolonel', '1234La');        
      cy.get(':nth-child(7) > .ajax-link').click().wait(2000);
      cy.get('#tbFacturas').click();
      cy.get('#btnFiltroFacturas').click().wait(2000);
      cy.get('#NroSiniestro').type(nroSiniestrosStr).wait(2000);
      cy.get('#form0 > .modal-footer > .btn-primary').click();
});*/
  });

    
 

  