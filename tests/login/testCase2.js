export default {
	'@tags': ['login'],
  	'User Logs in Password Blank': (client) => {
    const loginPage = client.page.loginPage();
	const constantsLogin = client.globals.constantsLogin;
	const waitForConditionTimeout = client.globals.waitForConditionTimeout;
    loginPage
      	.navigate()
      	.login(constantsLogin.emailPass, constantsLogin.passwordBlank)
      	.assert.value('@passInput', '');
  	client.pause(waitForConditionTimeout);
  	loginPage
  		.assert.cssProperty("@passInput", "color", "rgba(255, 0, 0, 1)");
	client.end();
  }
};