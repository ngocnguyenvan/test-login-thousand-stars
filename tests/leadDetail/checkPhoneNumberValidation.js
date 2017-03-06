export default {
    '@tags': ['leadDetail'],
    'Check Phone Number Validation': (client) => {
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
        leadDetailPage.clearLeadInformation(client, 'phoneNumber', 'abc');
        leadDetailPage.leadSaveButtonClick();
        client.pause(1000);
        leadDetailPage
            .assert.containsText('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2) div', 'Field value must be a valid phone number.')
            .assert.cssProperty('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2)', 'color', 'rgba(244, 67, 54, 1)')
            .assert.cssProperty('.profileCard input[name="phoneNumber"]', 'border-color', 'rgb(255, 0, 0)');
        client.pause(1000);
        leadDetailPage.clearLeadInformation(client, 'phoneNumber', '123456');
        leadDetailPage.leadSaveButtonClick();
        client.pause(1000);
        leadDetailPage
            .assert.containsText('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2) div', 'Field value must be a valid phone number.')
            .assert.cssProperty('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2)', 'color', 'rgba(244, 67, 54, 1)')
            .assert.cssProperty('.profileCard input[name="phoneNumber"]', 'border-color', 'rgb(255, 0, 0)');
        client.pause(1000);
        leadDetailPage.clearLeadInformation(client, 'phoneNumber', '1234567890');
        leadDetailPage.leadSaveButtonClick();
        client.pause(1000);
        leadDetailPage
            .assert.containsText('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2) div', 'Field value must be a valid phone number.')
            .assert.cssProperty('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2)', 'color', 'rgba(244, 67, 54, 1)')
            .assert.cssProperty('.profileCard input[name="phoneNumber"]', 'border-color', 'rgb(255, 0, 0)');
        client.pause(1000);
        leadDetailPage.clearLeadInformation(client, 'phoneNumber', '23456');
        leadDetailPage.leadSaveButtonClick();
        client.pause(1000);
        leadDetailPage
            .assert.containsText('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2) div', 'Field value must be a valid phone number.')
            .assert.cssProperty('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2)', 'color', 'rgba(244, 67, 54, 1)')
            .assert.cssProperty('.profileCard input[name="phoneNumber"]', 'border-color', 'rgb(255, 0, 0)');
        client.pause(1000);
        leadDetailPage.clearLeadInformation(client, 'phoneNumber');
        leadDetailPage.leadSaveButtonClick();
        client.pause(1000);
        leadDetailPage
            .assert.containsText('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2)', 'Field is required.')
            .assert.containsText('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2)', 'Field value must be a valid phone number.')
            .assert.cssProperty('.profileCard .form-fields-material .field-group:nth-child(3) .value div div:nth-child(2)', 'color', 'rgba(244, 67, 54, 1)')
            .assert.cssProperty('.profileCard input[name="phoneNumber"]', 'border-color', 'rgb(255, 0, 0)');
        client.pause(1000);
        client.end();
    }
};