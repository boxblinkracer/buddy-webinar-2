
export default class AdminPluginAction {

    /**
     *
     */
    openPluginConfiguration() {
        cy.visit('/admin#/sw/extension/config/NotificationCenter');
    }

    /**
     *
     * @param isActive
     */
    setActive(isActive) {
        if (isActive) {
            cy.get('[type="checkbox"]').check();
        } else {
            cy.get('[type="checkbox"]').uncheck();
        }
    }

    /**
     *
     * @param text
     */
    setText(text) {
        cy.get('#NotificationCenter\\.config\\.text').clear().type(text);
    }

    /**
     *
     */
    saveSettings() {
        cy.get('.sw-button').click();
    }

}
