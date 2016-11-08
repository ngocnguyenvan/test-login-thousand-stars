export default {
	'@tags': ['login'],
  	'User Logs in Email Blank': (client) => {
		const loginPage = client.page.loginPage();
		const constantsLogin = client.globals.constantsLogin;
		const waitForConditionTimeout = client.globals.waitForConditionTimeout;
		loginPage
			.navigate()
			.login( constantsLogin.emailBlank, constantsLogin.passwordPass)
			.assert.value('@emailInput', '');
		client.pause(waitForConditionTimeout);
		loginPage
			.assert.cssProperty("@emailInput", "color", "rgba(255, 0, 0, 1)");
		client.end();
	  }
};