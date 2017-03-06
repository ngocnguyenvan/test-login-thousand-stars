export default {
    '@tags': ['savedSearch'],
    'Create Saved Search via Push Notification (with alert option)': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetail = client.page.leadDetail();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const delayTime = client.globals.delayTime;
        const waitForAPICallback = client.globals.waitForAPICallback;
        leadDetail
            .navigate()
            .login( constantsLogin.emailPass, constantsLogin.passwordPass)
        client.pause(waitForAPICallback);

        leadDetail.clickButton('@pushListingButton');
        leadDetail.clickButton('@startNewSearchButton');
        leadDetail.clickCheckbox('@favoriteCityCheckbox');
        leadDetail.inputPrice('1', '1000');

        leadDetail.chooseSelectElement('@bedroomsSelect');
        leadDetail.chooseOptionElement('@optionBedrooms');

        leadDetail.chooseSelectElement('@BathsSelect');
        leadDetail.chooseOptionElement('@optionBaths');

        leadDetail.inputSqft('0', '1000');
        leadDetail.clickButton('@seeListingButton');
        client.pause(waitForAPICallback);

        leadDetail.clickButton('@saveListButton');
        leadDetail.clickCheckbox('@saveAsSearchAlertCheckbox');
        leadDetail.clickButton('@saveListButtonInDialog');

        leadDetail.changeInputLabelAndLocation("Test 25");
        client.pause(delayTime);

        leadDetail.clickCheckbox('@newOrUpdatedCheckbox');

        leadDetail.chooseSelectElement('@frequencySelect');
        leadDetail.chooseOptionElement('@optionFrequency');

        leadDetail.submitAndSave();
        client.pause(waitForAPICallback);

        leadDetail.expect.element('@reusutlSaveSearchFeatured').text.to.equal('Test 25: Stevensville, MD, 1+ Beds, 2+ Baths, 0+ Sqft $1k-$1m');
        client.end();
    }
};