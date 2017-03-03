export default {
    elements: {
        main: {
            selector: '//div[@class="left-column"]',
            locateStrategy: 'xpath'
        },
        leadAddPage: {
            selector: '//div[@class="lead-add"]',
            locateStrategy: 'xpath'
        },
        mainPage: {
            selector: '//a[text()="support@ylopo.com"]',
            locateStrategy: 'xpath'
        }
    }
};