export default {
    '@tags': ['leadDetail'],
    'Check Last Name Validation': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetailPage = client.page.leadDetailPage();
        const constantsLogin = client.globals.constantsLogin;
        const constantLeadInformation = client.globals.constantLeadInformation;
        const waitForAPICallback = client.globals.waitForAPICallback;
        loginPage
            .navigate()
            .login( constantsLogin.emailPass, constantsLogin.passwordPass);
        client.pause(waitForAPICallback);
        leadDetailPage
            .navigate();
        client.pause(waitForAPICallback);
        leadDetailPage.editLeadButtonClick();
        leadDetailPage.clearLeadInformation(client, 'lastName');
        client.pause(1000);
        leadDetailPage
            .assert.containsText('.profileCard .form-fields-material .field-group:nth-child(2) .value div div:nth-child(2) div', 'Field is required.')
            .assert.cssProperty('.profileCard .form-fields-material .field-group:nth-child(2) .value div div:nth-child(2)', 'color', 'rgba(244, 67, 54, 1)')
            .assert.cssProperty('.profileCard input[name="lastName"]', 'border-color', 'rgb(255, 0, 0)');
        client.end();
    }
};