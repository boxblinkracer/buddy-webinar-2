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

        it('Text can be displayed in Storefront', () => {
            
        })

    })
})
