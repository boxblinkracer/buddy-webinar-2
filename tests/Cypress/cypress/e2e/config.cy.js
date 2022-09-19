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

        it('Notification Text can be activated', () => {

            adminLogin.login();
            pluginAction.openPluginConfiguration();

            pluginAction.setActive(true);
            pluginAction.setText('Cypress Test Notification');
            pluginAction.saveSettings();

            cy.visit('/');
            cy.contains('Cypress Test Notification');


            adminLogin.openAdmin();
            pluginAction.openPluginConfiguration();

            pluginAction.setActive(false);
            pluginAction.saveSettings();

            cy.visit('/');
            cy.contains('#notificationCenter-cy-text').should('not.exist');

        })

    })
})
