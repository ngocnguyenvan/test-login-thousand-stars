export default {
    '@tags': ['addLead'],
    'First Name is deleted blank': (client) => {
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
        addLeadDetail.enterInput("@inputFirstName", 'Nguyen')
        addLeadDetail.removeInput('Nguyen')
        addLeadDetail.assert.cssProperty("@inputFirstName", "border-color", "rgb(255, 0, 0)");
        addLeadDetail.expect.element('@messageError').text.to.equal('Field is required.');
        client.end();
    }
};