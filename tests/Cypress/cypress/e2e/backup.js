import Devices from "Services/utils/Devices";
import Session from "Services/utils/Session"
// ------------------------------------------------------
import AdminLoginAction from "Actions/admin/AdminLoginAction";
import AdminPluginAction from "Actions/admin/AdminPluginAction";
import StorefrontRepository from "Repositories/storefront/StorefrontRepository";


const devices = new Devices();
const session = new Session();

const adminLogin = new AdminLoginAction();
const pluginAction = new AdminPluginAction();

const repoStorefront = new StorefrontRepository();

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

            cy.wait(1000);

            cy.visit('/');

            cy.contains('Cypress Test Notification');
        })

        it('No notification if config is disabled', () => {

            adminLogin.login();
            pluginAction.openPluginConfiguration();

            pluginAction.setActive(false);
            pluginAction.setText('Cypress Test Notification');
            pluginAction.saveSettings();

            cy.wait(1000);

            cy.visit('/');

            cy.contains('#notificationCenter-cy-text').should('not.exist');
        })

        it('Background color and text color can be adjusted', () => {

            adminLogin.login();
            pluginAction.openPluginConfiguration();

            pluginAction.setActive(true);
            pluginAction.setText('Cypress Test Notification');
            pluginAction.setBackgroundColor('#ff0000');
            pluginAction.setTextColor('#0000ff');
            pluginAction.saveSettings();

            cy.wait(1000);

            cy.visit('/');

            repoStorefront.getNotificationLayer().should('have.css', 'background-color', 'rgb(255, 0, 0)')
            repoStorefront.getNotificationLayer().should('have.css', 'color', 'rgb(0, 0, 255)')
        })

    })
})
