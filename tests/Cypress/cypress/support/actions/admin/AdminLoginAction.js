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

        cy.get('#sw-field--username').type('admin', {force: true});
        cy.get('#sw-field--password').type('shopware', {force: true});

        cy.get('.sw-button').click();
    }

}
