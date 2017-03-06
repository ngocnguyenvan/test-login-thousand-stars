export default {
    '@tags': ['savedSearch'],
    'Delete Saved search': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetail = client.page.leadDetail();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const delayTime = client.globals.delayTime;
        const waitForAPICallback = client.globals.waitForAPICallback;
        leadDetail
            .navigate()
            .login( constantsLogin.emailPass, constantsLogin.passwordPass )
        client.pause(waitForAPICallback);

        leadDetail.openEditSaveSearchFeature();
        client.pause(delayTime)

        leadDetail.delete();

        client.end();
    }
};