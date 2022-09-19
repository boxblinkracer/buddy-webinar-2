import Devices from "Services/utils/Devices";
import Session from "Services/utils/Session"
// ------------------------------------------------------
import AdminLoginAction from "Actions/admin/AdminLoginAction";
import AdminPluginAction from "Actions/admin/AdminPluginAction";


const devices = new Devices();
const session = new Session();

const adminLogin = new AdminLoginAction();
const pluginAction = new AdminPluginAction();


const device = devices.getFirstDevice();


context("Plugin Config", () => {

    beforeEach(() => {
        session.resetBrowserSession();
        devices.setDevice(device);
    });

    context(devices.getDescription(device), () => {

        it('C1: Text can be displayed in Storefront', () => {

            adminLogin.login();
            pluginAction.openPluginConfiguration();

            pluginAction.setActive(true);
            pluginAction.setText('Cypress Test Notification');
            pluginAction.saveSettings();

            cy.visit('/');
            cy.contains('Cypress Test Notification');
        })

        it('Text not displayed if inactive', () => {

            adminLogin.login();
            pluginAction.openPluginConfiguration();

            pluginAction.setActive(false);
            pluginAction.setText('Cypress Test Notification');
            pluginAction.saveSettings();

            cy.visit('/');
            cy.contains('#notificationCenter-cy-text').should('not.exist');
        })

    })
})
