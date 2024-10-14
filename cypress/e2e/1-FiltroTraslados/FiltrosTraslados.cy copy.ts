const pass = '1234La';
const coplus = 'coplussspv';
const Filtrar = '#btnFiltrar-todos';
const Limpiar = '.btn-secondary'

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://traslados-dev.claimservices.com.ar');
    cy.get('.mb-3').type(coplus);
    cy.get('.input-group > .form-control').type(pass);
    cy.get('.input-group-btn > .btn').click().wait(2000);
    cy.get(':nth-child(2) > .header').click();
    cy.get('[href="#/gestion/traslados"]').click();
    cy.get('#filter-menu-todos > .btn').click();

    
    //Fecha
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



    //Tipo de Siniestro (Son 3)
    cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(':nth-child(5) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('span.ng-option-label.ng-star-inserted').eq(0).click();
    cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(Filtrar).click();
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);
    cy.get(Limpiar).click();
    
    cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(':nth-child(5) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('span.ng-option-label.ng-star-inserted').eq(1).click();
    cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(Filtrar).click();
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);
    cy.get(Limpiar).click();

    cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(':nth-child(5) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('span.ng-option-label.ng-star-inserted').eq(2).click();
    cy.get(':nth-child(5) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(Filtrar).click();
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);
    cy.get(Limpiar).click();

    //Tipo de Viaje
    cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(':nth-child(6) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    //cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 1000 });
    cy.get('.ng-option-label').eq(0).click();
    cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(Filtrar).click().wait(3000);
    cy.get(Limpiar).click();

    cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(':nth-child(6) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('.ng-option-label').eq(1).click();
    cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(Filtrar).click().wait(3000);
    cy.get(Limpiar).click();

    cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(':nth-child(6) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('.ng-option-label').eq(2).click();
    cy.get(':nth-child(6) > .control-label').scrollIntoView({ duration: 2000 });
    cy.get(Filtrar).click().wait(3000);
    cy.get(Limpiar).click();
    

    //Estados (Son 7)
    cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('.ng-option-label').eq(0).click();
    cy.get('.card-body > :nth-child(1) > :nth-child(7)').scrollIntoView({ duration: 1000 });
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);
    cy.get(Filtrar).click();
    

    cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('.ng-option-label').eq(1).click();
    cy.get('.card-body > :nth-child(1) > :nth-child(7)').scrollIntoView({ duration: 1000 });
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);
    cy.get(Filtrar).click();
    

    cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('.ng-option-label').eq(2).click();
    cy.get('.card-body > :nth-child(1) > :nth-child(7)').scrollIntoView({ duration: 1000 });
    cy.get(Filtrar).click();
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);

    cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('.ng-option-label').eq(3).click();
    cy.get('.card-body > :nth-child(1) > :nth-child(7)').scrollIntoView({ duration: 1000 });
    cy.get(Filtrar).click();
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);

    cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('.ng-option-label').eq(4).click();
    cy.get('.card-body > :nth-child(1) > :nth-child(7)').scrollIntoView({ duration: 1000 });
    cy.get(Filtrar).click();
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);

    cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('.ng-option-label').eq(5).click();
    cy.get('.card-body > :nth-child(1) > :nth-child(7)').scrollIntoView({ duration: 1000 });
    cy.get(Filtrar).click();
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);

    cy.get(':nth-child(7) > .form-control > .ng-select-container > .ng-arrow-wrapper').click();
    cy.get('.ng-option-label').eq(6).click();
    cy.get('.card-body > :nth-child(1) > :nth-child(7)').scrollIntoView({ duration: 1000 });
    cy.get(Filtrar).click();
    cy.get('.col-md-7').scrollIntoView({ duration: 2000 }).wait(2000);

  })
})