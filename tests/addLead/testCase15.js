export default {
    '@tags': ['addLead'],
    'PartyID is required': (client) => {
        const loginPage = client.page.loginPage();
        const addLeadDetail = client.page.leadDetailAdd();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const waitForAPICallback = client.globals.waitForAPICallback;
        addLeadDetail
            .navigate()
            .login( constantsLogin.emailPass, constantsLogin.passwordPass)
        client.pause(waitForAPICallback);
        addLeadDetail.clickAddLeadButton();
        addLeadDetail.enterNewLeadDetails('Nguyen','Ha', 'test@gmail.com', '3453454');
        addLeadDetail.submit();
        client.pause(waitForAPICallback);
        addLeadDetail
            .assert.cssProperty("@inputSelectParty", "border-color", "rgb(255, 0, 0)");
        client.end();
    }
};