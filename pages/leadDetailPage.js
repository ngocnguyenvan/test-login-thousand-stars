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
    switchWindow() {
        this.api.window_handles(function(result) {
         var handle = result.value[0];
         this.switchWindow(handle);
       });
    },
    clickElement(elements) {
        return this
            .waitForElementPresent(elements, 3000)
            .click(elements)
            .api.pause(3000)
    },
    inputLabel(label) {
        return this
            .setValue('@addSearchLabelInput', label)
            .api.pause(3000)
    },
    createNewSearch(label) {
        return this
            .setValue('@addSearchLabelInput', label)
            .click('@newOrleansCheckbox')
            .api.pause(3000)
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
            .api.pause(3000)
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
        },
        pushListingButton: {
            selector: '//div[@class="icon active"]/span[@class="fa fa-bell"]',
            locateStrategy: 'xpath',
        },
        sendListingButton: {
            selector: '//button[@class="start-new-search ylopo-button"]',
            locateStrategy: 'xpath',
        },
        seeListingButton: {
            selector: '//button/span[text()="See Listings"]',
            locateStrategy: 'xpath'
        },
        saveListButton: {
            selector: '//button[text()="Save List"]',
            locateStrategy: 'xpath'
        },
        saveListButtonInDialog: {
            selector: '//div[@class="dialog-body"]/div[@class="div-align-center"]/button[text()="Save List"]',
            locateStrategy: 'xpath'
        },
        saveAsSearchAlertCheckbox: {
            selector: '//div[@class="dialog-body"]/div[@class="div-align-right"]/div[@class="check-box"]/input',
            locateStrategy: 'xpath'
        },
        newOrUpdatedCheckbox: {
            selector: 'input[value="NEW_OR_UPDATED"]'
        },
        reusutlSaveSearchStandard: {
            selector: '//table[@class="saved-search-list"]/tbody/tr[@class="row-standard"][position()=last()]/td[@class="saveSearch-column2 ylopo-row-column"]',
            locateStrategy: 'xpath'
        },

        reusutlSaveSearchFeatured: {
            selector: '//table[@class="listing-alert-list"]/tbody/tr[@class="row-featured"][position()=last()]/td[@class="column2 ylopo-row-column"]',
            locateStrategy: 'xpath'
        },

        editButtonSaveSearchFeatured: {
            selector:  '//table[@class="listing-alert-list"]/tbody/tr[@class="row-featured"][position()=last()]/td[@class="column6 ylopo-row-column"]/button',
            locateStrategy: 'xpath'
        },
        resultTestCase19: {
            selector:  '//table[@class="listing-alert-list"]/tbody/tr[@class="row-standard"][position()=last()]/td[@class="column1 ylopo-row-column"]',
            locateStrategy: 'xpath'
        },
        tabAllSearch: {
            selector: '//div[@class="lead-details-cell lead-saved-searches-block"]/div/div[position()=last()]/div/div[position()=1]/button[position()=3]',
            locateStrategy: 'xpath'
        },
        viewDetailsButton: {
            selector: '//table[@class="all-searches-list"]/tbody[@class="lead-search-list-body"]/tr[position()=1]/td[position()=last()]/button',
            locateStrategy: 'xpath'
        },
        viewMoreLessLink: {
            selector: '//a[@class = "view-more-less"]',
            locateStrategy: 'xpath'
        },
        listingViewTab: {
            selector: '//button[@id = "listings-viewed"]/div/span[text() = "Listings Viewed"]',
            locateStrategy: 'xpath'
        },
        favoriteListingTab: {
            selector: '//div[@class="tabs"]/div/button[position()=2]/div/span[text() = "Favorite Listings"]',
            locateStrategy: 'xpath'
        },
        listingAlertTab: {
            selector: '//div[@class="tabs"]/div/button[position()=4]/div/span[text() = "Listing Alert History"]',
            locateStrategy: 'xpath'
        },
        enqueueAlertButton: {
            selector: '//button/span[text() = "Enqueue Alert"]',
            locateStrategy: 'xpath'
        },
        detailListingAlertHistoryButton: {
            selector: '//div[@class="listing-alert-email-block"]/div[position()=1]/div[@class="form-group"]/button/span',
            locateStrategy: 'xpath'
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