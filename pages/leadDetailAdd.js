const addCommands = {
    clickAddLeadButton() {
        return this
            .click('@addLeadButton')
    },
    login(email, pass) {
        return this
            .setValue('@emailInput', email)
            .setValue('@passInput', pass)
            .click('@loginButton')
    },
    enterInput(elements, value) {
        return this
            .clearValue(elements)
            .setValue(elements, value)
            .api.pause(3000)
    },
    removeInput(text) {
        for ( let i = 0; i < text.length ; i++) {
            this.api.keys(this.api.Keys.BACK_SPACE)
        }
        this.api.pause(3000)
    },
    enterNewLeadDetails(firstName, lastName, emailAddress, phoneNumber, party) {
        return this
            .waitForElementVisible('@inputFirstName', 5000)
            .setValue('@inputFirstName', firstName)
            .setValue('@inputLastName', lastName)
            .setValue('@inputEmailAddress', emailAddress)
            .setValue('@inputPhoneNumber', phoneNumber)
            .api.pause(3000)
    },
    selectParty() {
        return this
            .click('@inputSelectParty')
            .api.pause(3000)
    },
    chooseParty() {
        return this
            .moveToElement('@party10000',10,0)
            .click('@party10000')
            .api.pause(3000)
    },
    submit(){
        return this
            .click('@saveButton')
    },
    submitEmptyLocation() {
        return this
            .click('@checkboxCreateSavedSearch')
            .click('@saveButton')
    },
    enterLocation() {
        return this
            .click('@checkboxCreateSavedSearch')
            .waitForElementVisible('@searchLocationInput', 2000)
            .setValue('@searchLocationInput', '34')
    },
    clickCancelButton(){
        return this
            .click('@cancelButton')
    },
    submitHaveLocation() {
        return this
            .click('@resultSearchLocation')
            .waitForElementVisible('@tagsinputLocation', 5000)
            .click('@saveButton')
    }
};

export default {
    url: 'http://localhost:7811',
    commands: [addCommands],
    elements: {
        // < -- login page -- >
        emailInput: {
            selector: 'input[type=text]'
        },
        passInput: {
            selector: 'input[name=password]'
        },
        loginButton: {
            selector: '//button[@class="pb-button"]',
            locateStrategy: 'xpath'
        },
        message: {
            selector: '//div[@class="message-bin"]',
            locateStrategy: 'xpath'
        },
        // Add Lead Page Elements
        addLeadButton: {
            selector: 'button[class="addLeadBtn ylopo-button"]'
        },
        inputFirstName: {
           selector: 'input[name=firstName]',
        },
        inputLastName: {
            selector: 'input[name="lastName"]',
        },
        inputEmailAddress: {
            selector: 'input[name="emailAddress"]',
        },
        inputPhoneNumber: {
            selector: 'input[name="phoneNumber"]',
        },
        inputSelectParty: {
          selector: 'div[name="partyId"]',
        },
        checkboxCreateSavedSearch: {
            selector: 'input[type="checkbox"]',
        },
        chooseParty: {
            selector: '//body[@class="thousand-stars"]/div[contains(@style,"position: fixed; top: 0px; bottom: 0px; left: 0px; right: 0px; z-index: 2000;")]/div/div',
            locateStrategy: 'xpath'
        },
        party10000: {
            selector: '//body[@class="thousand-stars"]/div[position()=last()]/div/div/div/div[position()=last()-1]',
            locateStrategy: 'xpath'
        },
        saveButton: {
          selector: '//button[@class="ylopo-button"]/span[text()="Submit and Save"]',
          locateStrategy: 'xpath'
        },
        resultSearchLocation: {
            selector: 'div[class="pac-container pac-logo"]',
        },
        searchLocationInput: {
            selector: '//input[@class="google-autocomplete react-tagsinput-input"]',
            locateStrategy: 'xpath'
        },
        tagsinputLocation : {
              selector: 'span[class="react-tagsinput-tag"]',
        },
        cancelButton: {
            selector: '//button[@class="ylopo-button"]/span[text()="Cancel"]',
            locateStrategy: 'xpath'
        }
    }
};