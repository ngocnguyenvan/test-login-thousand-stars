export default {
    '@tags': ['leadDetail'],
    'Check  [All Searches] Tab': (client) => {
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
        leadDetailPage.clickElement('@tabAllSearch');
        leadDetailPage.clickElement('@viewDetailsButton');
        leadDetailPage.assert.containsText('.all-searches-list .lead-search-list-body tr:first-child td:nth-child(6) button span', 'Close Details')
        leadDetailPage.clickElement('@viewDetailsButton');
        leadDetailPage.assert.containsText('.all-searches-list .lead-search-list-body tr:first-child td:nth-child(6) button span', 'View Details')
        leadDetailPage.clickElement('@viewMoreLessLink');
        leadDetailPage.assert.containsText('@viewMoreLessLink', 'View Less')
        leadDetailPage.clickElement('@viewMoreLessLink');
        leadDetailPage.assert.containsText('@viewMoreLessLink', 'View More')
        client.end()
    }
};