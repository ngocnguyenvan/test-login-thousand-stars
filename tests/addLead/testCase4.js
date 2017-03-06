export default {
    '@tags': ['addLead'],
    'Last Name is blank': (client) => {
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
        addLeadDetail.enterNewLeadDetails('Nguyen','', 'test@gmail.com', '3453454')
        addLeadDetail.selectParty();
        addLeadDetail.chooseParty();
        addLeadDetail.submit();
        client.pause(waitForAPICallback);
        addLeadDetail.assert.cssProperty("@inputLastName", "border-color", "rgb(255, 0, 0)");
        addLeadDetail.expect.element('@messageError').text.to.equal('Field is required.');
        client.end();
    }
};