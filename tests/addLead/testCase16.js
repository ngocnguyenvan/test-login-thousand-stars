export default {
    '@tags': ['addLead'],
    'Check Cancel button': (client) => {
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
        addLeadDetail.selectParty();
        addLeadDetail.chooseParty();
        addLeadDetail.clickCancelButton();
        client.pause(waitForAPICallback);
        successPage.expect.element('@mainPage').to.be.visible;
        client.end();
    }
};