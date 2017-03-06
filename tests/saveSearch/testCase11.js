export default {
    '@tags': ['savedSearch'],
    'Edit Save search has amenities': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetail = client.page.leadDetail();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const delayTime = client.globals.delayTime;
        const waitForAPICallback = client.globals.waitForAPICallback;
        leadDetail
            .navigate('http://localhost:7811/lead-detail/084f5ecb-c9b8-44ef-92eb-a83c9f675af9')
            .login( constantsLogin.emailPass, constantsLogin.passwordPass )
        client.pause(waitForAPICallback);

        leadDetail.changeTabs('@tabSaveSearch')

        leadDetail.editSaveSearch('@editButtonTestCase11')
        client.pause(delayTime)

        leadDetail.changeInputLabelAndLocation('Test label 40')
        leadDetail.inputPrice('200', '400')

        leadDetail.chooseSelectElement('@bedroomsSelect');
        leadDetail.chooseOptionElement('@optionBedroomsEdit');

        leadDetail.chooseSelectElement('@BathsSelect');
        leadDetail.chooseOptionElement('@optionBathsEdit');

        leadDetail.clickCheckbox('@testCheckboxSaveSearch');

        leadDetail.chooseSelectElement('@daysOnMarketSelect');
        leadDetail.chooseOptionElement('@optionDaysOnMarketEdit');

        leadDetail.clickCheckbox('@newOrUpdatedCheckbox');

        leadDetail.chooseSelectElement('@frequencySelectWithAmentity');
        leadDetail.chooseOptionElement('@optionFrequencyWeekly');

        leadDetail.submitAndSave();
        client.pause(waitForAPICallback);
        successPage.expect.element('@main').to.be.visible;

        client.end();
    }
};