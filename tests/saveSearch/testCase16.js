export default {
    '@tags': ['savedSearch'],
    'Validate Saved Search if Price Min > 10000': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetail = client.page.leadDetail();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const delayTime = client.globals.delayTime;
        const waitForAPICallback = client.globals.waitForAPICallback;
        leadDetail
            .navigate()
            .login( constantsLogin.emailPass, constantsLogin.passwordPass)
        client.pause(waitForAPICallback);

        leadDetail.addSaveSearch();
        client.pause(delayTime);
        leadDetail.clickCheckbox('@favoriteCityCheckbox');
        leadDetail.inputPrice(10001, '')
        leadDetail.submitAndSave();
        client.pause(waitForAPICallback);

        leadDetail.assert.cssProperty("@priceMinInput", "border-color", "rgb(255, 0, 0)");
        client.end();
    }
};