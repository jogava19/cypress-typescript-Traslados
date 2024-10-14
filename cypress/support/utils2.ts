
export function filtroIdclaims(idClaims) {
    cy.get('#mainMenu > :nth-child(4) > .ajax-link > span').click();
    cy.get('#btnFiltrar').click();
    cy.wait(3000); 
    cy.get('#IdSiniestro').type(idClaims);
    cy.wait(3000); 
    cy.get('#filtrarSiniestros').click();
  }
export function login(username, password) {
      cy.visit('https://repuestos-uat.claimservices.com.ar/Frontend');
      cy.get('input[data-val-minlength="Ingrese un nombre de usuario válido"]').type(username);
      cy.get('input[data-val-minlength="Ingrese una contraseña válida"]').type(password);
      cy.get('button[class="btn btn-blue btn-lg button-lg"]').click();
  }
    
export function logout() {
      cy.get('.navbar-inner > :nth-child(3) > .btn').click();
      cy.get('#logoutLink').click();
  }

  
export function filtroAjustadorPorEstado(estado) {
    cy.get('#mainMenu > :nth-child(4) > .ajax-link > span').click();
      cy.get('#btnFiltrar').click();
      cy.wait(2000); 
      cy.get('#s2id_Estado > .select2-choice > .select2-arrow > b').click();
      cy.get('html > body > div:nth-of-type(13)').type(`${estado}{enter}`);
      cy.wait(2000); 
      cy.get('#filtrarSiniestros').click();
      cy.wait(2000);
  }
  
export function altaSiniestro() {

  const asegurados = 'Juan zaya'; 
  const nroSiniestros: number= Math.floor(Math.random() * 1000000); // Ajusta el rango del nro de siniestro aleatorio
  let nroSiniestrosStr: string = nroSiniestros.toString();  const nroPoliza = '62345234'; 
  const mail = 'juan_denis1999@live.com.ar'; 
  const credentials = btoa('WSREP_LACAJA:82564eC326fa331e1ee2ef242b6ce32d5ebfdc07d419fa22de'); // Reemplaza con tus credenciales
  const request ={
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
  const capturaNrosiniestro=request.poliza.nroSiniestro;
  return cy.request({
    method: 'POST',
    url: 'https://repuestos-uat.claimservices.com.ar/Api/licitaciones/IngresarLicitacion',
    headers: {
      'Authorization': `Basic ${credentials}`,
      'Content-Type': 'application/json'
    },
    body: request
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body).to.have.property('idLicitacion');
    expect(response.body).to.have.property('link'); 

    const responseIdClaims = response.body.idLicitacion;
    cy.log(`Link capturado: ${responseIdClaims}`);
    cy.log(`Link capturado: ${capturaNrosiniestro}`);
    
    Cypress.env('responseIdClaims', responseIdClaims);
    Cypress.env('capturaNrosiniestro', capturaNrosiniestro);

    return cy.wrap(responseIdClaims);

  });
  }
