export default {
    '@tags': ['leadDetail'],
    'Check "Edit" button for "Active" listing alert': (client) => {
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
        leadDetailPage.createNewSearch('Testing 7');
        leadDetailPage.newAndAlertListingCheckBoxClick();
        leadDetailPage.submitAndSaveButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage.clickElement('@editButtonSaveSearchFeatured')
        leadDetailPage
            .assert.elementPresent(".lead-save-search")
        client.end();
    }
};