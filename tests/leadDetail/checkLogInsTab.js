export default {
    '@tags': ['leadDetail'],
    'Check  [Log-Ins] Tab': (client) => {
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
        leadDetailPage.clickElement('.lead-sessions-list-header tr:nth-last-child(1) th:nth-child(1)')
        leadDetailPage.assert.containsText('.lead-sessions-list-body tr:first-child td:first-child div', '01/12/2017 09:59am ICT')
        leadDetailPage.clickElement('.lead-sessions-list-header tr:nth-last-child(1) th:nth-child(2)')
        leadDetailPage.assert.containsText('.lead-sessions-list-body tr:first-child td:nth-last-child(5)', 'Initial Landing')
        leadDetailPage.clickElement('.lead-sessions-list-header tr:nth-last-child(1) th:nth-child(2)')
        leadDetailPage.assert.containsText('.lead-sessions-list-body tr:first-child td:nth-last-child(4)', 'an hour')
        leadDetailPage.clickElement('.lead-sessions-list-header tr:nth-last-child(1) th:nth-child(3)')
        leadDetailPage.assert.containsText('.lead-sessions-list-body tr:first-child td:nth-last-child(3)', '1')
        leadDetailPage.clickElement('.lead-sessions-list-header tr:nth-last-child(1) th:nth-child(4)')
        leadDetailPage.assert.containsText('.lead-sessions-list-body tr:first-child td:nth-last-child(2)', '5')
        client.end();
    }
};