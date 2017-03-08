export default {
    '@tags': ['leadDetail'],
    'Check [Listing Viewed] Tab': (client) => {
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
        leadDetailPage.clickElement('@listingViewTab');
        leadDetailPage.clickElement('.lead-listings-list-body tr:first-child td:nth-child(5) div');
        client.pause(waitForAPICallback);
        leadDetailPage.clickElement('.lead-listings-list-body tr:nth-child(6) td:nth-child(5) div');
        client.pause(waitForAPICallback);
        client.end();
    }
};