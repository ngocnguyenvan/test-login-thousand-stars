export default {
	'@tags': ['login'],
  	'User Logs in success': (client) => {
		const loginPage = client.page.loginPage();
		const mainPage = client.page.mainPage();
		const constantsLogin = client.globals.constantsLogin;
		const waitForConditionTimeout = client.globals.waitForConditionTimeout;
		loginPage
			.navigate()
			.login(constantsLogin.emailPass, constantsLogin.passwordPass);
		client.pause(waitForConditionTimeout);
		mainPage.expect.element('@main').to.be.visible;
		client.end();
	  }
};