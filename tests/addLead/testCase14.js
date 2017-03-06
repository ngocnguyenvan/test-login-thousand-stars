export default {
    '@tags': ['addLead'],
    'Invalid Phone number - delete phone number': (client) => {
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
        addLeadDetail.enterNewLeadDetails('Nguyen','Ha', 'test@gmail.com', '234567');
        addLeadDetail.selectParty();
        addLeadDetail.chooseParty();
        addLeadDetail.enterInput("@inputPhoneNumber", '234567')
        addLeadDetail.removeInput('234567')
        client.pause(waitForAPICallback);
        addLeadDetail
            .assert.cssProperty("@inputPhoneNumber", "border-color", "rgb(255, 0, 0)");
        addLeadDetail.expect.element('@messageError').text.to.contain('Field is required.' && 'Field value must be a valid phone number.');
        client.end();
    }
};