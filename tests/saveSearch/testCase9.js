export default {
    '@tags': ['savedSearch'],
    'Display "Edit Saved Search] screen': (client) => {
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
        client.pause(delayTime);

        leadDetail.expect.element('@labelSaveSearch').to.have.value.that.equals('Test label 1');
        leadDetail.expect.element('@tagLocation').text.to.equal('Stevensville, MD');

        leadDetail.expect.element('@priceMinInput').to.have.value.that.equals('200');
        leadDetail.expect.element('@priceMaxInput').to.have.value.that.equals('400');

        leadDetail.expect.element('@sqftMin').to.have.value.that.equals('0');
        leadDetail.expect.element('@sqftMax').to.have.value.that.equals('2000');

        leadDetail.expect.element('@houseCheckboxSaveSearch').to.be.selected;

        client.end();
    }
};