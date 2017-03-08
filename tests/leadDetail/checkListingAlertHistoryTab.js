export default {
    '@tags': ['leadDetail'],
    'Check  [Listing Alert History] Tab': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetailPage = client.page.leadDetailPage();
        const constantsLogin = client.globals.constantsLogin;
        const constantLeadInformation = client.globals.constantLeadInformation;
        const waitForAPICallback = client.globals.waitForAPICallback;
        loginPage
            .navigate()
            .login(constantsLogin.emailPass, constantsLogin.passwordPass);
        client.pause(waitForAPICallback);
        leadDetailPage
            .navigate();
        client.pause(waitForAPICallback);
        leadDetailPage.newSearchAndListingAlertButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage.createNewSearch('Testing 10');
        leadDetailPage.newAndAlertListingCheckBoxClick();
        leadDetailPage.submitAndSaveButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage.clickElement('@editButtonSaveSearchFeatured');
        leadDetailPage.clickElement('@enqueueAlertButton');
        leadDetailPage.submitAndSaveButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage.clickElement('@listingAlertTab');
        leadDetailPage.expect.element('.listing-alert-email-block .sent-list:first-child .input-group .form-control').text.to.contain('Listings In New Orleans');
        leadDetailPage.clickElement('@detailListingAlertHistoryButton');
        client.pause(waitForAPICallback);
        leadDetailPage.expect.element('@detailListingAlertHistoryButton').text.to.contain('Close Details');
        leadDetailPage.clickElement('@detailListingAlertHistoryButton');
        leadDetailPage.expect.element('@detailListingAlertHistoryButton').text.to.contain('View Details');
        clent.end();
    }
};
