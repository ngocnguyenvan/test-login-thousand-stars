export default {
    '@tags': ['leadDetail'],
    'Check Email Address Validation': (client) => {
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
        leadDetailPage.clearLeadInformation(client, 'emailAddress', 'test');
        leadDetailPage.leadSaveButtonClick();
        client.pause(1000);
        leadDetailPage
            .assert.containsText('.profileCard .form-fields-material .field-group:nth-child(4) .value div div:nth-child(2) div', 'Field value must be a valid email.')
            .assert.cssProperty('.profileCard .form-fields-material .field-group:nth-child(4) .value div div:nth-child(2)', 'color', 'rgba(244, 67, 54, 1)')
            .assert.cssProperty('.profileCard input[name="emailAddress"]', 'border-color', 'rgb(255, 0, 0)');
        client.pause(1000);
        leadDetailPage.clearLeadInformation(client, 'emailAddress');
        leadDetailPage.leadSaveButtonClick();
        client.pause(1000);
        leadDetailPage
            .assert.containsText('.profileCard .form-fields-material .field-group:nth-child(4) .value div div:nth-child(2)', 'Field is required.')
            .assert.containsText('.profileCard .form-fields-material .field-group:nth-child(4) .value div div:nth-child(2)', 'Field value must be a valid email.')
            .assert.cssProperty('.profileCard .form-fields-material .field-group:nth-child(4) .value div div:nth-child(2)', 'color', 'rgba(244, 67, 54, 1)')
            .assert.cssProperty('.profileCard input[name="emailAddress"]', 'border-color', 'rgb(255, 0, 0)');
        client.pause(1000);
        leadDetailPage.clearLeadInformation(client, 'firstName', constantLeadInformation.FIRST_NAME_NEW);
        leadDetailPage.clearLeadInformation(client, 'lastName', constantLeadInformation.LAST_NAME_NEW);
        leadDetailPage.clearLeadInformation(client, 'phoneNumber', constantLeadInformation.PHONE_NUMBER_NEW);
        leadDetailPage.clearLeadInformation(client, 'emailAddress', 'thanh.buithi@powergatesoftware.com');
        leadDetailPage.leadSaveButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage
            .assert.containsText('.profileCard .status-FAIL', 'A user already exists with that email')
            .assert.cssProperty('.profileCard .status-FAIL', 'color', 'rgba(255, 0, 0, 1)')
            .assert.containsText('.profileCard div:nth-child(2) .row:nth-child(1) .value p', constantLeadInformation.FIRST_NAME)
            .assert.containsText('.profileCard div:nth-child(2) .row:nth-child(2) .value p', constantLeadInformation.LAST_NAME)
            .assert.containsText('.profileCard div:nth-child(2) .row:nth-child(3) .value a', constantLeadInformation.PHONE_NUMBER)
            .assert.containsText('.profileCard div:nth-child(2) .row:nth-child(4) .value a', constantLeadInformation.EMAIL)
        client.pause(1000);
        leadDetailPage.editLeadButtonClick();
        client.pause(1000);
        leadDetailPage.clearLeadInformation(client, 'firstName', constantLeadInformation.FIRST_NAME_NEW);
        leadDetailPage.clearLeadInformation(client, 'lastName', constantLeadInformation.LAST_NAME_NEW);
        leadDetailPage.clearLeadInformation(client, 'phoneNumber', constantLeadInformation.PHONE_NUMBER_NEW);
        leadDetailPage.clearLeadInformation(client, 'emailAddress', constantLeadInformation.EMAIL_NEW);
        leadDetailPage.leadSaveButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage
            .assert.containsText('.profileCard div .row:nth-child(1) .value p', constantLeadInformation.FIRST_NAME_NEW)
            .assert.containsText('.profileCard div .row:nth-child(2) .value p', constantLeadInformation.LAST_NAME_NEW)
            .assert.containsText('.profileCard div .row:nth-child(3) .value a', constantLeadInformation.PHONE_NUMBER_NEW)
            .assert.containsText('.profileCard div .row:nth-child(4) .value a', constantLeadInformation.EMAIL_NEW)
        client.end();
    }
};