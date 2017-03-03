const delayTime = 3000;
const waitForElementVisible = 10000;
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
            .waitForElementVisible('@creatNewButton', waitForElementVisible)
            .click('@creatNewButton')
    },
    editSaveSearch(edit) {
        return this
            .waitForElementVisible(edit, waitForElementVisible)
            .click(edit)
    },
    openEditSaveSearchFeature() {
        return this
            .waitForElementVisible('@editButtonSaveSearchFeatured', waitForElementVisible)
            .click('@editButtonSaveSearchFeatured')
    },
    // changeTabs
    changeTabs(tab) {
        return this
            .click(tab)
            .api.pause(delayTime)
    },

    // confirm popup action

    acceptPopup() {
        return this.api.acceptAlert()
    },
    cancelPopup() {
        return this.api.dismissAlert()
    },

    // drawPolygon
    drawPolygon() {
        this.click('@arrowDraw')
            .moveToElement('@map', 400, 10)
            .api.mouseButtonClick(0)
        this.moveToElement('@map', 300, 50)
            .api.mouseButtonClick(0)
        this.moveToElement('@map', 500, 100)
            .api.mouseButtonClick(0)
        this.moveToElement('@map', 400, 10)
            .api.mouseButtonClick(0)
        this.api.pause(delayTime)
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
    removeValuePrice(input) {
        return this.clearValue(input)
    },
    inputPrice(min, max) {
        return this
            .click('@priceMinInput')
            .clearValue('@priceMinInput')
            .setValue('@priceMinInput', min)
            .click('@priceMaxInput')
            .clearValue('@priceMaxInput')
            .setValue('@priceMaxInput', max)
            .api.pause(delayTime)
    },

    inputSqft(min, max) {
        return this
            .clearValue('@sqftMin')
            .setValue('@sqftMin', min)
            .clearValue('@sqftMax')
            .setValue('@sqftMax', max)
            .api.pause(delayTime)
    },

    // select action
    chooseSelectElement(select) {
        return this
            .click(select)
            .api.pause(delayTime)
    },

    //option action
    chooseOptionElement(option) {
        return this
            .click(option)
            .api.pause(delayTime)
    },

    // location action
    selectCity() {
        return this
            .waitForElementVisible('@resultLocation', waitForElementVisible)
            .click('@resultLocation')
    },

    // checkbox action
    clickCheckbox(checkbox) {
        return this
            .click(checkbox)
            .api.pause(delayTime)
    },

    // amenity action
    selectAmenity(amenity) {
        return this
            .click(amenity)
            .api.pause(delayTime)
    },
    // button action
    clickButton(button) {
        return this
            .click(button)
            .api.pause(delayTime)
    },

    // submit action
    submitAndSave() {
        return this
            .click('@submitAndSaveButton')
    },
    // delete action
    delete() {
        return this
            .waitForElementVisible('@deleteButton', waitForElementVisible)
            .click('@deleteButton')
            .api.pause(3000)
    }

};

export default {
    url: 'http://localhost:7811/lead-detail/510a1648-57b0-43de-96bd-11c8aeabeb92',
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

        // Button
        submitAndSaveButton: {
            selector: '//button/span[text()="Submit and Save"]',
            locateStrategy: 'xpath'
        },
        deleteButton: {
            selector: '//button/span[text()="Delete"]',
            locateStrategy: 'xpath'
        },
        hasPhotoButton: {
            selector: '//div[@class="searchButton"]/div[text()="Has Photos"]',
            locateStrategy: 'xpath'
        },
        penddingButton: {
            selector: '//div[@class="searchButton"]/div[text()="Pending"]',
            locateStrategy: 'xpath'
        },
        OpenHouseButton: {
            selector: '//div[@class="searchButton"]/div[text()="Open House"]',
            locateStrategy: 'xpath'
        },
        // tab
        tabAllAreas: {
            selector: '//div[@class="tabs-container select-location-header"]/div/button[position()=2]',
            locateStrategy: 'xpath'
        },
        tabMapSearch: {
            selector: '//div[@class="tabs-container select-location-header"]/div/button[position()=3]',
            locateStrategy: 'xpath'
        },
        tabSaveSearch: {
            selector: '//div[@class="lead-details-cell lead-saved-searches-block"]/div/div[position()=last()]/div/div[position()=1]/button[position()=2]',
            locateStrategy: 'xpath'
        },

        // map element
        arrowDraw: {
            selector: '//div[@class="gm-style"]/div[position()=last()]/div[position()=2]',
            locateStrategy: 'xpath'
        },
        map: {
            selector: '//div[@class="gm-style"]',
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

        commercialCheckboxSaveSearch: {
            selector: 'input[value="commercial"]'
        },

        landCheckboxSaveSearch: {
            selector: 'input[value="land"]'
        },

        testCheckboxSaveSearch: {
            selector: 'input[value="test"]'
        },

        newOrUpdatedCheckbox: {
            selector: 'input[value="NEW_OR_UPDATED"]'
        },

        favoriteCityCheckbox: {
            selector: '//div[@class="cities-container"]/div[position()=last()]',
            locateStrategy: 'xpath'
        },
        favoriteCityCheckbox1: {
            selector: '//div[@class="cities-container"]/div[position()=last()-1]',
            locateStrategy: 'xpath'
        },

        favoriteCityCheckboxTestCase8: {
            selector: '//div[@class="cities-container"]/div[position()=1]',
            locateStrategy: 'xpath'
        },

        countyCheckbox: {
            selector: '//div[@class="title-country"][position()=1]/div[@class="checkbox-country"]',
            locateStrategy: 'xpath'
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
        yearMinSelect: {
            selector: 'div[name="yearMin"]'
        },
        yearMaxSelect: {
            selector: 'div[name="yearMax"]'
        },
        daysOnMarketSelect: {
            selector: '//div[@class="lead-search-details"]/div[position()=3]/div[position()=last()-1]/div/div[position()=2]',
            locateStrategy: 'xpath'
        },
        frequencySelect: {
            selector: '//div[@class="lead-search-details"]/div[position()=4]/div/div[position()=3]/div[position()=2]',
            locateStrategy: 'xpath'
        },
        frequencySelectWithAmentity: {
            selector: '//div[@class="lead-search-details"]/div[position()=5]/div/div[position()=3]/div[position()=2]',
            locateStrategy: 'xpath'
        },
        lotSizeMinSelect: {
            selector: 'div[name="lotAcresMin"]'
        },
        lotSizeMaxSelect: {
            selector: 'div[name="lotAcresMax"]'
        },

        // option

        optionBedrooms: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=2]',
            locateStrategy: 'xpath'
        },
        optionBaths: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=3]',
            locateStrategy: 'xpath'
        },
        optionBedroomsEdit: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=6]',
            locateStrategy: 'xpath'
        },
        optionBathsEdit: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=7]',
            locateStrategy: 'xpath'
        },
        optionDaysOnMarket: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=last()]',
            locateStrategy: 'xpath'
        },
        optionDaysOnMarketEdit: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=2]',
            locateStrategy: 'xpath'
        },
        optionFrequency: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=1]',
            locateStrategy: 'xpath'
        },
        optionFrequencyWeekly: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=2]',
            locateStrategy: 'xpath'
        },
        optionYearMax: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=2]',
            locateStrategy: 'xpath'
        },
        optionYearMin: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=40]',
            locateStrategy: 'xpath'
        },
        optionLotSizeMin: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=7]',
            locateStrategy: 'xpath'
        },
        optionLotSizeMax: {
            selector: '//body/div[position()=2]/div/div/div/div[position()=16]',
            locateStrategy: 'xpath'
        },

        // Input Sqrt

        sqftMin: {
            selector: 'input[name="s_sqftMin"]'
        },
        sqftMax: {
            selector: 'input[name="s_sqftMax"]'
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
        amenities4: {
            selector: '//div[@class="amenities-wrapper"]/div[position()=5]/div[position()=1]',
            locateStrategy: 'xpath'
        },

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
            selector:  '//table[@class="listing-alert-list"]/tbody/tr[@class="row-featured"][position()=1]/td[@class="column6 ylopo-row-column"]/button',
            locateStrategy: 'xpath'
        },
        editButtonTestCase11: {
            selector:  '//table[@class="saved-search-list"]/tbody/tr[@class="row-standard"][position()=last()]/td[@class="saveSearch-column3 ylopo-row-column"]/a',
            locateStrategy: 'xpath'
        },

        // div result
        reusutlSaveSearchStandard: {
            selector: '//table[@class="lead-search-list"]/tbody/tr[@class="row-standard"][position()=last()]/td[@class="column1 ylopo-row-column"]',
            locateStrategy: 'xpath'
        },

        reusutlSaveSearchFeatured: {
            selector: '//table[@class="listing-alert-list"]/tbody/tr[@class="row-featured"][position()=last()]/td[@class="column2 ylopo-row-column"]',
            locateStrategy: 'xpath'
        },
    }
};
