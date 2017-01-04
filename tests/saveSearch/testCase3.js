export default {
    '@tags': ['savedSearch'],
    'Add  saved search có amenities': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetail = client.page.leadDetail();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const delayTime = client.globals.delayTime;
        const waitForAPICallback = client.globals.waitForAPICallback;
        leadDetail
            .navigate('http://localhost:7811/lead-detail/44bd6468-31ca-431d-80b3-7e14270baf46')
            .login( constantsLogin.emailPass, constantsLogin.passwordPass)
        client.pause(waitForAPICallback);
        leadDetail
            .openSaveSearchBlock();
        client.pause(waitForAPICallback);
        leadDetail
            .inputSaveSearch('Test label 3','C-Road, CA')
        client.pause(waitForAPICallback);
        leadDetail
            .selectCity();
        client.pause(delayTime);
        leadDetail
            .checkHouseCheckbox();
        client.pause(delayTime);
        leadDetail
            .selectAmenity();
        client.pause(delayTime);
        leadDetail
            .submitAndSave();
        client.pause(waitForAPICallback);
        leadDetail.expect.element('@reusutlSaveSearchStandard').text.to.equal('Test label 3: C-Road, CA');
        client.end();
    }
};