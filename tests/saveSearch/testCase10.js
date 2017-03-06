export default {
    '@tags': ['savedSearch'],
    'Edit Save search none amenities': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetail = client.page.leadDetail();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const delayTime = client.globals.delayTime;
        const waitForAPICallback = client.globals.waitForAPICallback;
        leadDetail
            .navigate()
            .login( constantsLogin.emailPass, constantsLogin.passwordPass )
        client.pause(waitForAPICallback);

        leadDetail.openEditSaveSearchFeature();
        client.pause(delayTime);

        leadDetail.changeInputLabelAndLocation('Test label 10')
        leadDetail.clickCheckbox('@favoriteCityCheckbox1')
        leadDetail.inputPrice('200', '400')

        leadDetail.chooseSelectElement('@bedroomsSelect');
        leadDetail.chooseOptionElement('@optionBedroomsEdit');

        leadDetail.chooseSelectElement('@BathsSelect');
        leadDetail.chooseOptionElement('@optionBathsEdit');

        leadDetail.chooseSelectElement('@daysOnMarketSelect');
        leadDetail.chooseOptionElement('@optionDaysOnMarketEdit');

        leadDetail.chooseSelectElement('@frequencySelect');
        leadDetail.chooseOptionElement('@optionFrequencyWeekly');

        leadDetail.submitAndSave();
        client.pause(waitForAPICallback);
        successPage.expect.element('@main').to.be.visible;

        /*client.end();*/
    }
};