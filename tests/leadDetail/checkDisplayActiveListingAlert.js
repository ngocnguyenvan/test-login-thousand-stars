export default {
    '@tags': ['leadDetail'],
    'Check display of "Active" Listing Alert If user sent Listing Alert from "Listing Result" screen': (client) => {
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
        leadDetailPage.clickElement('@pushListingButton');
        leadDetailPage.clickElement('@sendListingButton');
        leadDetailPage.clickElement('@newOrleansCheckbox');
        client.pause(waitForAPICallback);
        leadDetailPage.clickElement('@seeListingButton');
        client.pause(waitForAPICallback);
        leadDetailPage.clickElement('@saveListButton');
        leadDetailPage.clickElement('@saveAsSearchAlertCheckbox');
        leadDetailPage.clickElement('@saveListButtonInDialog');
        client.pause(waitForAPICallback);
        leadDetailPage.inputLabel('Testing 3');
        leadDetailPage.clickElement('@newOrUpdatedCheckbox');
        leadDetailPage.submitAndSaveButtonClick();
        client.pause(waitForAPICallback);
        leadDetailPage
            .assert.containsText('@reusutlSaveSearchFeatured', 'Testing 3: New Orleans, LA')
        client.end();
    }
};