export default {
    '@tags': ['savedSearch'],
    'Edit Save search có amenities': (client) => {
        const loginPage = client.page.loginPage();
        const leadDetail = client.page.leadDetail();
        const successPage = client.page.successPage();
        const constantsLogin = client.globals.constantsLogin;
        const delayTime = client.globals.delayTime;
        const waitForAPICallback = client.globals.waitForAPICallback;
        leadDetail
            .navigate('http://localhost:7811/lead-detail/44bd6468-31ca-431d-80b3-7e14270baf46')
            .login( constantsLogin.emailPass, constantsLogin.passwordPass)
        client.pause(waitForAPICallback);

        // Run Test Case 3
        leadDetail.openSaveSearchBlock();
        client.pause(waitForAPICallback);

        leadDetail
            .inputSaveSearch('Test label 3','C-Road, CA')
        client.pause(waitForAPICallback);
        leadDetail
            .selectCity();
        client.pause(delayTime);
        leadDetail
            .checkHouseCheckbox();
        client.pause(delayTime);
        leadDetail
            .selectAmenity();
        client.pause(delayTime);

        leadDetail.submitAndSave();
        client.pause(waitForAPICallback);

        // Edit resutl Saved Search test case 3
        leadDetail.openEditSaveSearchStandardPopup();
        client.pause(waitForAPICallback);

        leadDetail.changeInputLabelAndLocation("Test label 4")
        client.pause(waitForAPICallback);

        leadDetail.inputLocation("Lost Bridge Village, AR")
        client.pause(waitForAPICallback);

        leadDetail.selectCity();
        client.pause(waitForAPICallback);

        leadDetail.checkCondosCheckbox();
        client.pause(waitForAPICallback);

        leadDetail.checkApartmentsCheckbox();
        client.pause(waitForAPICallback);

        leadDetail.checkLandCheckbox();
        client.pause(waitForAPICallback);

        leadDetail.inputPrice('200', '400');
        client.pause(delayTime);

        leadDetail.chooseBedRoom();
        client.pause(delayTime);

        leadDetail.selectBedRoom();
        client.pause(delayTime);

        leadDetail.chooseBaths();
        client.pause(delayTime);

        leadDetail.selectBaths();
        client.pause(delayTime);

        leadDetail.inputSqft('200');
        client.pause(delayTime);

        leadDetail.chooseDaysOnMarket();
        client.pause(delayTime);

        leadDetail.selectDayOnMarket();
        client.pause(delayTime);

        leadDetail.selectAmenity1();
        client.pause(delayTime);

        leadDetail.selectAmenity2();
        client.pause(delayTime);

        leadDetail.selectAmenity3();
        client.pause(delayTime);

        leadDetail.checkNewAndUpdated();
        client.pause(waitForAPICallback);

        leadDetail.chooseFrequency();
        client.pause(delayTime);

        leadDetail.selectFrequency();
        client.pause(delayTime);

        leadDetail
            .submitAndSave();
        client.pause(waitForAPICallback);

        leadDetail.expect.element('@reusutlSaveSearchFeatured').text.to.equal('Test label 4: C-Road, CA (+1 locations), 5+ Beds, 6+ Baths, 200+ Sqft $200k-$400k');
        /*client.end();*/
    }
};