export default {
	'@tags': ['savedSearch'],
  	'Display "Create new Saved Search] screen': (client) => {
		const loginPage = client.page.loginPage();
        const leadDetail = client.page.leadDetail();
        const successPage = client.page.successPage();
		const constantsLogin = client.globals.constantsLogin;
		const waitForAPICallback = client.globals.waitForAPICallback;
		leadDetail
			.navigate()
			.login(constantsLogin.emailPass, constantsLogin.passwordPass)
		client.pause(waitForAPICallback);
        successPage.expect.element('@main').to.be.visible;
		client.end();
	}
};