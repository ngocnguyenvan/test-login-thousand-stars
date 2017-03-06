export default {
    '@tags': ['leadDetail'],
    'Check Display Of Active Listing Alert': (client) => {
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
        leadDetailPage.newSearchAndListingAlertButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage.createNewSearch('Testing1');
        leadDetailPage.newAndAlertListingCheckBoxClick();
        leadDetailPage.submitAndSaveButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage
            .assert.containsText('.listing-alert-list .lead-search-list-body .row-featured:last-child .column1', 'Active')
            .assert.containsText('.listing-alert-list .lead-search-list-body .row-featured:last-child .column2', 'Testing1: New Orleans, LA')
            .assert.cssProperty('.listing-alert-list .lead-search-list-body .row-featured:last-child', 'background-color', 'rgba(158, 180, 69, 1)')
        client.pause(waitForAPICallback);
        leadDetailPage.editSearchButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage.newAndAlertListingCheckBoxClick();
        leadDetailPage.submitAndSaveButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage.editSearchStandardButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage.newAndAlertListingCheckBoxClick();
        leadDetailPage.submitAndSaveButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage
            .assert.containsText('.listing-alert-list .lead-search-list-body .row-featured:last-child .column1', 'Active')
            .assert.containsText('.listing-alert-list .lead-search-list-body .row-featured:last-child .column2', 'Testing1: New Orleans, LA')
            .assert.cssProperty('.listing-alert-list .lead-search-list-body .row-featured:last-child', 'background-color', 'rgba(158, 180, 69, 1)')
        client.end();
    }
};