export default {
    '@tags': ['leadDetail'],
    'User click add lead button': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetailPage = client.page.leadDetailPage();
        const constantsLogin = client.globals.constantsLogin;
        const waitForAPICallback = client.globals.waitForAPICallback;
        loginPage
            .navigate()
            .login( constantsLogin.emailPass, constantsLogin.passwordPass);
        client.pause(waitForAPICallback);
        leadDetailPage
            .navigate();
        client.pause(waitForAPICallback);
        leadDetailPage.addLeadButtonClick();
        leadDetailPage
            .assert.urlEquals("http://localhost:7811/lead-detail/add");
        client.end();
    }
};