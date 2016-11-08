export default {
	'@tags': ['login'],
  	'User Logs in error email or password': (client) => {
    const loginPage = client.page.loginPage();
	const constantsLogin = client.globals.constantsLogin;
	const waitForConditionTimeout = client.globals.waitForConditionTimeout;
    loginPage
      	.navigate()
      	.login(constantsLogin.emailError, constantsLogin.passwordError);
  	client.pause(waitForConditionTimeout);
  	loginPage
  		.assert.containsText('@message', "Invalid username or password.");
	client.end();
  }
};