import { login, logout } from "../../support/utils";
const contraseña = '1234La';
const usuario = 'coplussspv';
const Filtrar = '#btnFiltrar-todos';
const Limpiar = '.btn-secondary'
function abrirFiltro () {
  cy.get(':nth-child(2) > .header').click();
  cy.get('[href="#/gestion/traslados"]').click();
  cy.get('#filter-menu-todos > .btn').click();  
};

describe('IdTraslado', () => {
it ('IdTraslado', () => {
  cy.viewport(1920, 1080);
  login(usuario,contraseña);
  cy.get(':nth-child(2) > .header').click();
  cy.get('[href="#/gestion/traslados"]').click();
  cy.get(':nth-child(1) > .input-group > .form-control').type('2010450').wait(2000);
  cy.get('tr.ng-star-inserted > :nth-child(1)').each(($row) => {
    cy.wrap($row).should('have.text', '2010450');
 });
   });


   describe('Nro.Siniestro', () => {
    it ('Nro.Siniestro', () => {
      cy.viewport(1920, 1080);
      login(usuario,contraseña);
      cy.get(':nth-child(2) > .header').click();
      cy.get('[href="#/gestion/traslados"]').click();
      cy.get(':nth-child(2) > .input-group > .form-control').type('5357').wait(2000);
      cy.get('tbody tr').each(($row) => {
      cy.wrap($row.find('td:nth-child(4)')).should('include.text', '5357');
      });
    });
  });

  describe('Nombre Paciente', () => {
    it ('Nombre Paciente', () => {
      cy.viewport(1920, 1080);
      login(usuario,contraseña);
      cy.get(':nth-child(2) > .header').click();
        cy.get('[href="#/gestion/traslados"]').click();
        cy.get(':nth-child(3) > .input-group > .form-control').type('LEDEZMA').wait(2000);
        cy.get('tbody tr').each(($row) => {
          cy.wrap($row.find('td:nth-child(5)')).should('include.text', 'LEDEZMA');
          });
        });
      });
    /*
//Tipo de Siniestro (Son 3)
describe('FechaCarga', () => {
  it ('FechaCarga', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
    cy.get(':nth-child(1) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(':nth-child(1) > .ng-valid > .ng-star-inserted > .form-control').click();
    cy.get('bs-datepicker-navigation-view > .ng-star-inserted > span').click();
    cy.get('tbody > :nth-child(1) > :nth-child(1) > span').click();
    cy.get('tbody > :nth-child(1) > :nth-child(1) > .ng-star-inserted').click();
    cy.get(':nth-child(2) > .ng-valid > .ng-star-inserted > .form-control').click();
    cy.wait(2000);
    cy.get(Filtrar).click();
    cy.get('.sm').scrollIntoView({ duration: 2000 }).wait(2000);
    cy.get(Limpiar).click();
    });
  });
*/
  describe('TipoSiniestroTodos', () => {
    it ('TipoSiniestroTodos', () => {
      cy.viewport(1920, 1080);
      login(usuario,contraseña);
      abrirFiltro()
  cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(':nth-child(5) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('span.ng-option-label.ng-star-inserted').eq(0).click();
    cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(Filtrar).click();
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);
  });
});

describe('TipoSiniestroART', () => {
  it ('TipoSiniestroART', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
  cy.get(':nth-child(5) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
  cy.get('span.ng-option-label.ng-star-inserted').eq(1).click();
  cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
  cy.get(Filtrar).click();
  cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);
  cy.get('tbody tr').each(($row) => {
    cy.wrap($row.find('td:nth-child(3)')).should('include.text', 'ART');
    });
  });
});

describe('TipoSiniestroAP', () => {
  it ('TipoSiniestroAP', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
  cy.get(':nth-child(5) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
  cy.get('span.ng-option-label.ng-star-inserted').eq(2).click();
  cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
  cy.get(Filtrar).click();
  cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);
  cy.get('tbody tr').each(($row) => {
    cy.wrap($row.find('td:nth-child(3)')).should('include.text', 'AP');
    });
  });
});

describe('TipoViajeInmediato', () => { //FALTA agregar validacion a resultados
  it ('TipoViajeInmediato', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
cy.get(':nth-child(6) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(0).click();
cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
cy.get(Filtrar).click().wait(3000);
  });
});

describe('TipoViajeEspontaneo', () => { //FALTA agregar validacion a resultados
  it ('TipoViajeEspontaneo', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
cy.get(':nth-child(6) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(1).click();
cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
cy.get(Filtrar).click().wait(3000);
    
  });
});

describe('TipoViajeProgramado', () => { //FALTA agregar validacion a resultados
  it ('TipoViajeProgramado', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
cy.get(':nth-child(6) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(2).click();
cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Estados', () => {
  it ('Solicitado', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(0).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Estados', () => {
  it ('Realizado', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(1).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Estados', () => {
  it ('Confirmado', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(2).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Estados', () => {
  it ('Anulado', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(3).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Estados', () => {
  it ('Negativo', () => {
    cy.viewport(1920, 1080);
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(4).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Estados', () => {
  it ('SinResolución', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(5).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Estados', () => {
  it ('EnRevisión', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(6).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('ControlMedico', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(0).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('Estudios', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(1).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('Cirugia', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(2).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('JuntaMedica', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(3).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('Homologacion', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(4).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('Otros', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(5).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('Derivacion', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(6).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('AltaSanatorial', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(7).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('FKT', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(8).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('Recalificacion', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(9).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('Emergencia', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(10).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('PrimeraAtencion', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(11).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('Conexiones', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(12).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('MotivdelTraslado', () => {
  it ('Ortopedia', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(8) > .form-control > .ng-select-container > .ng-value-container > .ng-input > input').click();
cy.get('.ng-option-label').eq(13).click();
cy.get(Filtrar).click().wait(3000);
  });
});


describe('Notas', () => {
  it ('ConNotas', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(9) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(0).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Notas', () => {
  it ('SinNotas', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(9) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(1).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Notas', () => {
  it ('Respondidas', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(9) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(2).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Notas', () => {
  it ('Ortopedia', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(9) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(3).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Notas', () => {
  it ('Ortopedia', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(9) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(4).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Reclamos', () => {
  it ('Todos', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(16) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(0).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Reclamos', () => {
  it ('Todos', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(16) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(1).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('Reclamos', () => {
  it ('Todos', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(16) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
cy.get('.ng-option-label').eq(2).click();
cy.get(Filtrar).click().wait(3000);
  });
});

describe('SeguidoART', () => {
  it ('Todos', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get('.row.ng-star-inserted > :nth-child(1)').click();
cy.get(Filtrar).click().wait(3000);
});
});

describe('SeguidoART', () => {
  it ('Todos', () => {
    login(usuario,contraseña);
    abrirFiltro()
cy.get(':nth-child(2) > custom-switch.ng-valid > .custom-control').click();
cy.get(Filtrar).click().wait(3000);
});
});

describe('Cerrar sesion', () => {
  it ('Cerrar sesion', () => {
    logout;
  });
});

});