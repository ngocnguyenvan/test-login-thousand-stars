export default {
	'@tags': ['login'],
  	'User Log in success': (client) => {
		const loginPage = client.page.loginPage();
		const mainPage = client.page.mainPage();
		const constantsLogin = client.globals.constantsLogin;
		const waitForAPICallback = client.globals.waitForAPICallback;
		loginPage
			.navigate()
			.login(constantsLogin.emailPass, constantsLogin.passwordPass);
		client.pause(waitForAPICallback);
		mainPage.expect.element('@main').to.be.visible;
		client.end();
	  }
};