export default {
    '@tags': ['leadDetail'],
    'User click log out button': (client) => {
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
        leadDetailPage.logOutButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage
            .assert.urlEquals("http://localhost:7811/auth?redirect=%2F");
        client.end();
    }
};