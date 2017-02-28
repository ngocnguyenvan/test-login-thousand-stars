export default {
    '@tags': ['savedSearch'],
    'Edit Save search có amenities': (client) => {
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

        // Run Test Case 3
        leadDetail.openEditSaveSearchStandardPopup();
        client.pause(delayTime);
        leadDetail.delete();
        //leadDetail.getAlertText().to.equal('Are you sure?')

        /*client.end();*/
    }
};