export default {
    '@tags': ['leadDetail'],
    'Check Edit Lead Button': (client) => {
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
        leadDetailPage.editLeadButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage
            .assert.containsText('.crud-card', 'First Name:')
            .assert.containsText('.crud-card', 'Last Name:')
            .assert.containsText('.crud-card', 'Phone:')
            .assert.containsText('.crud-card', 'Email:')
            .assert.containsText('.crud-card', 'Created:')
            .assert.elementPresent('.profileCard input[name="firstName"]')
            .assert.elementPresent('.profileCard input[name="lastName"]')
            .assert.elementPresent('.profileCard input[name="phoneNumber"]')
            .assert.elementPresent('.profileCard input[name="emailAddress"]')
            .assert.containsText('.buttons-top-right .ylopo-button:first-child span', 'Save')
            .assert.containsText('.buttons-top-right .ylopo-button:last-child span', 'Cancel');
        client.end();
    }
};