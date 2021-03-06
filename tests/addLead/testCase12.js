export default {
    '@tags': ['addLead'],
    'Invalid Phone number - start with 1  and less than 11 characters': (client) => {
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
        addLeadDetail.enterNewLeadDetails('Nguyen','Ha', 'test@gmail.com', '1234567890');
        addLeadDetail.selectParty();
        addLeadDetail.chooseParty();
        addLeadDetail.submit();
        client.pause(waitForAPICallback);
        addLeadDetail
            .assert.cssProperty("@inputPhoneNumber", "border-color", "rgb(255, 0, 0)");
        addLeadDetail.expect.element('@messageError').text.to.equal('Field value must be a valid phone number.');
        client.end();
    }
};