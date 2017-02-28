export default {
	'@tags': ['savedSearch'],
  	'Add  saved search (không có amenities)': (client) => {
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
        leadDetail.addSaveSearch();
        client.pause(waitForAPICallback);
        leadDetail
            .inputSaveSearch('Test label 2','C-Road, CA')
        client.pause(waitForAPICallback);
       /* leadDetail
            .selectCity();
        client.pause(delayTime);
        leadDetail
            .checkHouseCheckbox();
        client.pause(delayTime);
        leadDetail
            .submitAndSave();
        client.pause(waitForAPICallback);
        leadDetail.expect.element('@reusutlSaveSearchStandard').text.to.equal('Test label 2: C-Road, CA')
    	client.end();*/
    }
};