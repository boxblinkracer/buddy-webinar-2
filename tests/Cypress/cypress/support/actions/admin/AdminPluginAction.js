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
        cy.get('#NotificationCenter\\.config\\.text').clear().type(text, {force: true});
    }

    /**
     *
     * @param hexCode
     */
    setBackgroundColor(hexCode) {
        const selector = '.sw-system-config--field-notification-center-config-color-background > .sw-colorpicker > .sw-field > .sw-block-field__block > .sw-colorpicker__input';
        cy.get(selector).clear().type(hexCode, {force: true});
    }

    /**
     *
     * @param hexCode
     */
    setTextColor(hexCode) {
        const selector = '.sw-system-config--field-notification-center-config-color-text > .sw-colorpicker > .sw-field > .sw-block-field__block > .sw-colorpicker__input';
        cy.get(selector).clear().type(hexCode, {force: true});
    }

    /**
     *
     */
    saveSettings() {
        cy.contains('Save').click();
    }

}
