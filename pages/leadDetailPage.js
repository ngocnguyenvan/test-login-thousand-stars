const leadDetailCommand = {
    clearLeadInformation(browser, clearValue, newValue) {
        switch(clearValue){
            case 'firstName':
                deleteValue(browser,'.profileCard input[name="firstName"]');
                if (newValue) {
                    this.setValue('@firstNameInput', newValue);
                }
                break;
            case 'lastName':
                deleteValue(browser,'.profileCard input[name="lastName"]');
                if (newValue) {
                    this.setValue('@lastNameInput', newValue);
                }
                break;
            case 'phoneNumber':
                deleteValue(browser,'.profileCard input[name="phoneNumber"]');
                if (newValue) {
                    this.setValue('@phoneNumberInput', newValue);
                }
                break;
            case 'emailAddress':
                deleteValue(browser,'.profileCard input[name="emailAddress"]');
                if (newValue) {
                    this.setValue('@emailInput', newValue);
                }
                break;
        }
    },
    createNewSearch(label) {
        return this
            .setValue('@addSearchLabelInput', label)
            .click('@newOrleansCheckbox')
    },
    addLeadButtonClick() {
        return this
            .click('@addLeadButton')
    },
    logOutButtonClick() {
        return this
            .click('@logOutButton')
    },
    editSearchButtonClick() {
        return this
            .click('@editSearchButton')
    },
    editSearchStandardButtonClick() {
        return this
            .click('@editSearchStandardButton')
    },
    editLeadButtonClick() {
        return this
            .click('@editLeadButton')
    },
    leadSaveButtonClick() {
        return this
            .click('@leadSaveButton')
    },
    newSearchAndListingAlertButtonClick() {
        return this
            .click('@newSearchAndListingAlertButton')
    },
    newAndAlertListingCheckBoxClick() {
        return this
            .click('@newAndAlertListingCheckBox')
    },
    submitAndSaveButtonClick() {
        return this
            .click('@submitAndSaveButton')
    }
};
export default {
    url: 'http://localhost:7811/lead-detail/510a1648-57b0-43de-96bd-11c8aeabeb92',
    commands: [leadDetailCommand],
    elements: {
        addLeadButton: {
            selector: '//button[@class="addLeadBtn ylopo-button"]',
            locateStrategy: 'xpath',
        },
        logOutButton: {
            selector: '//button[@class="logoutBtn ylopo-button"]',
            locateStrategy: 'xpath',
        },
        editSearchButton: {
            selector: '//tr[@class="row-featured"][td="Testing1: New Orleans, LA"]/td/button',
            locateStrategy: 'xpath',
        },
        editSearchStandardButton: {
            selector: '//tr[@class="row-standard"]/td[@class="column6 ylopo-row-column"]/a',
            locateStrategy: 'xpath',
        },
        editLeadButton: {
            selector: '//button[@class="edit-button ylopo-button"][span="Edit"]',
            locateStrategy: 'xpath',
        },
        leadSaveButton: {
            selector: '.buttons-top-right .ylopo-button:first-child',
        },
        firstNameInput: {
            selector: '.profileCard input[name="firstName"]',
        },
        lastNameInput: {
            selector: '.profileCard input[name="lastName"]',
        },
        phoneNumberInput: {
            selector: '.profileCard input[name="phoneNumber"]',
        },
        emailInput: {
            selector: '.profileCard input[name="emailAddress"]',
        },
        newSearchAndListingAlertButton: {
            selector: '//div[@class="icon active"]/span[@class="fa fa-home"]',
            locateStrategy: 'xpath',
        },
        addSearchLabelInput: {
            selector: 'input[name="label"]',
        },
        newOrleansCheckbox: {
            selector: '//div[@class="feature-checkbox"][div[label="New Orleans, LA"]]',
            locateStrategy: 'xpath',
        },
        newAndAlertListingCheckBox: {
            selector: 'input[value="NEW_OR_UPDATED"]'
        },
        submitAndSaveButton: {
            selector: '//button[@class="actionButton ylopo-button"][span="Submit and Save"]',
            locateStrategy: 'xpath',
        }
    }
};

const deleteValue = function (browser, selector) {
    browser.getValue(selector, function(result){
        for (var c in result.value){
            browser.setValue(selector, browser.Keys.BACK_SPACE) }
    });
    return this;
};