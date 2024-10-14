
describe('API Alta Siniestro', () => {
    const asegurados= 'Juan zaya'; 
    const nroSiniestros= '1234'; 
    const nroPoliza= '62345234'; 
    const mail= 'juan_denis1999@live.com.ar'; 
    const credentials = btoa('WSREP_LACAJA:82564eC326fa331e1ee2ef242b6ce32d5ebfdc07d419fa22de'); // Reemplaza 'tuUsuario' y 'tuContraseña' con tus credenciales
  
    it('Alta Siniestro Api/Link seguimiento', () => {
      cy.request({
        method: 'POST',
        url: 'https://repuestos-uat.claimservices.com.ar/Api/licitaciones/IngresarLicitacion',
        headers: {
          'Authorization': `Basic ${credentials}`, // Incluye el encabezado de autenticación
          'Content-Type': 'application/json'
        },
        body: {
          "idUsuario": 1283,
          "idUsuarioApi": 15,
          "fechaSiniestro": "2023-09-19",
          "descripcionHecho": "ROBO",
          "idTaller": 1759,
          "sinTaller": null,
          "nuevoTaller": null,
          "asegurado": {
            "nombre": asegurados,
            "telefono": "4566-555",
            "codArea": "0223",
            "celular": "1256 4566-555",
            "email": mail,
            "idProvincia": null,
            "codPostal": "",
            "calle": "",
            "numero": "",
            "piso": "",
            "depto": "",
            "idTipoDocumento": "96",
            "documento": "22007007"
          },
          "poliza": {
            "idBroker": null,
            "nroSiniestro": nroSiniestros,
            "nroPoliza": nroPoliza,
            "item": 1,
            "cobertura": "663-TODO RIESGO FRANQUICIA FIJA I"
          },
          "vehiculo": {
            "codVehiculo": 1170022,
            "anio": 2020,
            "patente": "AA526LL",
            "nroChasis": "VR1URHNJNLW025441",
            "fotos": []
          },
          "repuestos": [
            {
              "idRepuestoClaims": null,
              "idRepuestoCia": "SFTP 899 KPP",
              "repuesto": "Paragolpe Delantero",
              "idCalidad": 1,
              "codPieza": "8AC",
              "precioReferencia": 4500,
              "descripcion": "modelo mexicano",
              "fotos": []
            },
            {
              "idRepuestoClaims": null,
              "idRepuestoCia": "RTT 845 POD",
              "repuesto": "LARGUERO IZQUIERDO",
              "idCalidad": 1,
              "codPieza": "8AC",
              "precioReferencia": 5500,
              "descripcion": "modelo brasilero",
              "fotos": []
            }
          ],
          "parametros": {
            "idPlazoPago": 1,
            "idPlazoEntrega": 2,
            "adjudicarAutomaticamente": false,
            "permiteCambiarCalidad": false,
            "horasLicitacion": 8
          }
        }
      }).then((response) => {
        expect(response.status).to.eq(200); // Verifica que el estado de la respuesta sea 200 (OK)
        expect(response.body).to.have.property('idLicitacion'); // Verifica que la respuesta tenga una propiedad 'idLicitacion'
        expect(response.body).to.have.property('mensaje'); 
        expect(response.body).to.have.property('status'); 
        expect(response.body).to.have.property('link'); 
        // Capturar el enlace
        const link = response.body.link;
        cy.log(`Link capturado: ${link}`);
        cy.visit(link);
        cy.wait(2000);  
        cy.get('#completeName').should('have.text', asegurados);
        cy.get('#claimNumber').should('have.text', nroSiniestros);
        cy.get('#policyNumber').should('have.text', nroPoliza);
        cy.get(':nth-child(1) > .col-md-12 > .alert > .uppercase').should('have.text', 'Licitando');
      });
    });
    
  });
  