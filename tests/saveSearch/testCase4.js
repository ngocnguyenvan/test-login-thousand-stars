export default {
    '@tags': ['savedSearch'],
    'View Edit screen': (client) => {
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
        leadDetail
            .openSaveSearchBlock();
        client.pause(waitForAPICallback);
        leadDetail
            .inputSaveSearch('Test label 2','C-Road, CA')
        client.pause(waitForAPICallback);
        leadDetail
            .selectCity();
        client.pause(delayTime);
        leadDetail
            .checkHouseCheckbox();
        client.pause(delayTime);
        leadDetail
            .submitAndSave();
        client.pause(waitForAPICallback);
        leadDetail
            .openEditSaveSearchStandardPopup();
        client.pause(waitForAPICallback);
        leadDetail.expect.element('@labelSaveSearch').to.have.value.that.equals('Test label 2');
        leadDetail.expect.element('@tagLocation').text.to.equal('C-Road, CA');
        leadDetail.expect.element('@houseCheckboxSaveSearch').to.be.selected;
        client.end();
    }
};