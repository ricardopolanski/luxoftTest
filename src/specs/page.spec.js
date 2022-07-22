const {test,expect} = require('@playwright/test');
const { PlaywrightDevPage } = require('../pages/playwright-dev-page');
const {Elements} = require('../pages/pageElements');
const elements = new Elements;
let newTab = false;
let page;

test.describe('test', async () => {
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
  });
  
    test('Test Main Page', async () => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.btnDarkTheme();
    await playwrightDev.findHtmlLocator();
    
    await playwrightDev.selectOrigin();
    await playwrightDev.checkOrigin(newTab);
    await playwrightDev.checkFromIataValue();
    
    await playwrightDev.selectDestination();
    await playwrightDev.checkDestination();
    await playwrightDev.checkDestIataValue();
    
    await playwrightDev.selectDepartureDate();    
    await playwrightDev.checkDeptDate();
    
    await playwrightDev.selectReturnTicket();
    await playwrightDev.checkReturnDate();

    await playwrightDev.selectPassengers();
    await playwrightDev.checkPassenger();
  
    await expect(page).toHaveURL('https://www.aviasales.com/?params=JFK3007BER1');
    
   
    const [page1] = await Promise.all([
      page.waitForEvent('popup'),
      page.locator(elements.searchFlights()).click()
    ]);
    

    page = page1;
    //await expect(page.locator('[data-test-id="autocomplete-origin"]', { waitUntil: 'networkidle' })).toBeVisible();
    });

  test('Check NewTab Info', async () => {
    newTab = true;
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.checkOrigin(newTab);
    await playwrightDev.checkDeptDate();
    await playwrightDev.checkReturnDate();
    await playwrightDev.checkFromIataValue();
    await playwrightDev.checkDestIataValue();
    await playwrightDev.checkPassenger();
    await playwrightDev.checkDestination(); 
  });

});