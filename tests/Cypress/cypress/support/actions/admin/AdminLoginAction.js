export default class AdminLoginAction {

    /**
     *
     */
    openAdmin() {
        cy.visit('/admin');
    }

    /**
     *
     */
    login() {

        this.openAdmin();

        cy.get('#sw-field--username').type('admin');
        cy.get('#sw-field--password').type('shopware');

        cy.get('.sw-button').click();
    }

}
