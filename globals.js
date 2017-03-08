const constantsLogin = {
    emailBlank : '',
    passwordBlank : '',
    emailError : 'emailError@gmail.com',
    passwordError : 'passwordError',
    emailPass : 'ngoc.nguyenvan@powergatevietnam.com',
    passwordPass : '123456789Aab'
};
const constantsAddLead = {
  firstName : 'Rukmini',
  lastName : 'Barbara',
  emailAddress : 'rbrar@unisys.jp',
  phoneNumber : '2345667',
  areaSearch : '21224',
  party : 'Ylopo Lending Solutions (10000)'
};
const constantLeadInformation = {
    BLANK_FIELD: '',
    FIRST_NAME: 'Thanh',
    LAST_NAME: 'Bui',
    PHONE_NUMBER: '7676565',
    EMAIL: 'thanh.buithi@powergatevietnam.com',
    FIRST_NAME_NEW: 'Huyen',
    LAST_NAME_NEW: 'Ta',
    PHONE_NUMBER_NEW: '7777777',
    EMAIL_NEW: 'tuannta123@powergatevietnam.com', //change each time test
}
export default {
    waitForConditionTimeout : 10000,
    delayTime: 3000,
    constantsLogin : constantsLogin,
    constantsAddLead : constantsAddLead,
    constantLeadInformation: constantLeadInformation,
    waitForAPICallback : 5000,
    waitForElementPresent: 2000
};
