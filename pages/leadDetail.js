const leadDetailCommands = {

    // login action
    login(email, pass) {
        return this
          .setValue('@emailInput', email)
          .setValue('@passInput', pass)
          .click('@loginButton')
    },

    // Change screen
    addSaveSearch() {
        return this
            .waitForElementVisible('@creatNewButton', 10000)
            .click('@creatNewButton')
    },
    editSaveSearch() {
        return this
            .waitForElementVisible('@editButtonSaveSearchStandard', 10000)
            .click('@editButtonSaveSearchStandard')
    },
    openEditSaveSearchFeaturePopup() {
        return this
            .waitForElementVisible('@editButtonSaveSearchFeatured', 10000)
            .click('@editButtonSaveSearchFeatured')
    },
    // input action

    inputSaveSearch(label, location) {
        return this
            .setValue('@labelSaveSearch', label)
            .setValue('@inputLocation', location)
    },
    changeInputLabelAndLocation(label, location) {
        return this
            .clearValue('@labelSaveSearch')
            .setValue('@labelSaveSearch', label)

    },
    inputLocation(location) {
        return this
            .setValue('@inputLocation', location)
    },
    inputPrice(min, max) {
        return this
            .setValue('@priceMinInput', min)
            .setValue('@priceMaxInput', max)
    },
    inputSqft(sqft) {
        return this
            .setValue('@sqftInput', sqft)
    },

    // select action
    chooseBedRoom() {
        return this
            .click('@bedroomsSelect')
    },
    chooseBaths() {
        return this
            .click('@BathsSelect')
    },
    chooseDaysOnMarket() {
        return this
            .click('@daysOnMarketSelect')
    },
    chooseFrequency() {
        return this
            .click('@frequencySelect')
    },

    //option action
    selectBedRoom() {
        return this
            .click('@optionBedrooms')
    },
    selectBaths() {
        return this
            .click('@optionBaths')
    },
    selectDayOnMarket() {
        return this
            .click('@optionDaysOnMarket')
    },
    selectFrequency() {
        return this
            .click('@optionFrequency')
    },

    // location action
    selectCity() {
        return this
            .click('@resultLocation')
    },

    // checkbox action
    checkHouseCheckbox() {
        return this
            .click('@houseCheckboxSaveSearch')
    },
    checkCondosCheckbox() {
        return this
            .click('@condosCheckboxSaveSearch')
    },
    checkApartmentsCheckbox() {
        return this
            .click('@apartmentsCheckboxSaveSearch')
    },
    checkLandCheckbox() {
        return this
            .click('@landCheckboxSaveSearch')
    },
    checkNewAndUpdated() {
        return this
            .click('@newOrUpdatedCheckbox')
    },

    // amenity action
    selectAmenity() {
        return this
            .click('@amenities')
    },
    selectAmenity1() {
        return this
            .click('@amenities1')
    },
    selectAmenity2() {
        return this
            .click('@amenities2')
    },
    selectAmenity3() {
        return this
            .click('@amenities3')
    },

    // submit action
    submitAndSave() {
        return this
            .click('@submitAndSaveButton')
    },
    // delete action
    delete() {
        return this
            .waitForElementVisible('@deleteButton', 10000)
            .click('@deleteButton')
    }

};

export default {
  url: 'http://localhost:7811/lead-detail/9a75d28e-0dce-41b6-8b66-c6cb11b39de7',
  commands: [leadDetailCommands],
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

        // < -- saveSearch dialog -- >


        // Button
        submitAndSaveButton: {
            selector: '//button/span[text()="Submit and Save"]',
            locateStrategy: 'xpath'
        },
        deleteButton: {
            selector: '//button/span[text()="Delete"]',
            locateStrategy: 'xpath'
        },

        // search Location Input
        labelSaveSearch: {
            selector: 'input[name="label"]'
        },
        inputLocation: {
            selector: 'input[class="google-autocomplete react-tagsinput-input"]'
        },
        resultLocation: {
            selector: '//div[@class="grouped-location-autocomplete-suggestion"]',
            locateStrategy: 'xpath'
        },
        tagLocation: {
            selector: '//span[@class="react-tagsinput-tag"]',
            locateStrategy: 'xpath'
        },

        // checkbox
        houseCheckboxSaveSearch: {
            selector: 'input[value="house"]'
        },
        condosCheckboxSaveSearch: {
            selector: 'input[value="condo"]'
        },
        apartmentsCheckboxSaveSearch: {
            selector: 'input[value="apt"]'
        },
        landCheckboxSaveSearch: {
            selector: 'input[value="land"]'
        },
        newOrUpdatedCheckbox: {
            selector: 'input[value="NEW_OR_UPDATED"]'
        },

        // inputPrice
        priceMinInput: {
            selector: 'input[name="priceMin"]'
        },
        priceMaxInput: {
            selector: 'input[name="priceMax"]'
        },

        // select

        bedroomsSelect: {
            selector: 'div[name="bedrooms"]'
        },
        BathsSelect: {
            selector: 'div[name="baths"]'
        },
        daysOnMarketSelect: {
            selector: '//div[@class="time-on-market-select searchField"]/div',
            locateStrategy: 'xpath'
        },
        frequencySelect: {
            selector: '//div[@class="lead-search-details"]/div[position()=last()-1]/div[position()=3]/div[position()=2]',
            locateStrategy: 'xpath'
        },

        // option

        optionBedrooms: {
            selector: '//body/div[position()=3]/div/div/div/div[position()=6]',
            locateStrategy: 'xpath'
        },
        optionBaths: {
            selector: '//body/div[position()=3]/div/div/div/div[position()=7]',
            locateStrategy: 'xpath'
        },
        optionDaysOnMarket: {
            selector: '//body/div[position()=3]/div/div/div/div[position()=5]',
            locateStrategy: 'xpath'
        },
        optionFrequency: {
            selector: '//body/div[position()=3]/div/div/div/div[position()=2]',
            locateStrategy: 'xpath'
        },
        // Sqft Min Input

        sqftInput: {
             selector: 'input[name="s_sqftMin"]'
        },

        // amenities
        amenities: {
            selector: '//div[@class="amenities-wrapper"]/div[position()=1]/div[position()=1]',
            locateStrategy: 'xpath'
        },
        amenities1: {
            selector: '//div[@class="amenities-wrapper"]/div[position()=2]/div[position()=1]',
            locateStrategy: 'xpath'
        },
        amenities2: {
            selector: '//div[@class="amenities-wrapper"]/div[position()=3]/div[position()=1]',
            locateStrategy: 'xpath'
        },
        amenities3: {
            selector: '//div[@class="amenities-wrapper"]/div[position()=4]/div[position()=1]',
            locateStrategy: 'xpath'
        },

        // < -- Saved Search & Listing Alerts Block -- >

        // Button
        creatNewButton: {
            selector: '//button/span[text()="Create New"]',
            locateStrategy: 'xpath'
        },
        editButtonSaveSearchStandard: {
            selector: '//table[@class="lead-search-list"]/tbody/tr[@class="row-standard"][position()=last()]/td[@class="column3 ylopo-row-column"]/a',
            locateStrategy: 'xpath'
        },
        editButtonSaveSearchFeatured: {
            selector: '//table[@class="lead-search-list"]/tbody/tr[@class="row-featured"][position()=last()]/td[@class="column3 ylopo-row-column"]/a',
            locateStrategy: 'xpath'
        },

        // div result
        reusutlSaveSearchStandard: {
            selector: '//table[@class="lead-search-list"]/tbody/tr[@class="row-standard"][position()=last()]/td[@class="column1 ylopo-row-column"]',
            locateStrategy: 'xpath'
        },

        reusutlSaveSearchFeatured: {
            selector: '//table[@class="lead-search-list"]/tbody/tr[@class="row-featured"][position()=1]/td[@class="column1 ylopo-row-column"]',
            locateStrategy: 'xpath'
        },
    }
};
