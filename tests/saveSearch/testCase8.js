export default {
    '@tags': ['SaveSearch'],
    'Add saved search has amenities. partyID = 10233 which has favourite city ': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetail = client.page.leadDetail();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const delayTime = client.globals.delayTime;
        const waitForAPICallback = client.globals.waitForAPICallback;
        leadDetail
            .navigate('http://localhost:7811/lead-detail/084f5ecb-c9b8-44ef-92eb-a83c9f675af9')
            .login( constantsLogin.emailPass, constantsLogin.passwordPass)
        client.pause(waitForAPICallback);

        leadDetail.addSaveSearch();
        client.pause(delayTime);

        leadDetail.changeInputLabelAndLocation("Test label 6")
        client.pause(delayTime);

        leadDetail.clickCheckbox('@favoriteCityCheckboxTestCase8');

        leadDetail.clickCheckbox('@testCheckboxSaveSearch');

        leadDetail.selectAmenity('@amenities3');

        leadDetail.selectAmenity('@amenities4');

        leadDetail.submitAndSave();
        client.pause(waitForAPICallback);

        client.end();
    }
};