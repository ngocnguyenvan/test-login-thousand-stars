export default {
    '@tags': ['addLead'],
    'Email Address - invalid format': (client) => {
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
        addLeadDetail.enterInput("@inputEmailAddress", 'test')
        addLeadDetail.assert.cssProperty("@inputEmailAddress", "border-color", "rgb(255, 0, 0)");
        addLeadDetail.expect.element('@messageError').text.to.equal('Field value must be a valid email.');
        client.end();
    }
};