export function login(username, password) {
    cy.visit('https://traslados.claimservices.com.ar');
    cy.get('.mb-3').type(username);
    cy.get('.input-group > .form-control').type(password);
    cy.get('.input-group-btn > .btn').click().wait(2000);
};

export function logout() {
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get(':nth-child(3) > .dropdown-item').click();

};