const { test, expect } = require('@playwright/test');
const {Elements} = require('../pages/pageElements');
const elements = new Elements;
const {FlightData} = require('../pages/ticketData');
const flightData = new FlightData;

exports.PlaywrightDevPage = class PlaywrightDevPage {
  
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.btnDark = elements.btnDarkTheme();
    this.originResultPage = elements.originResultPage();
    this.htmlLocator = elements.htmlLocatorElement();
    this.themeClass = elements.themeClass();
    
    this.fromField = elements.fromField();
    this.destinationField = elements.destinatioFieldSelector();

    this.originCity = elements.originCity();
    this.destinationCity = elements.destinationCity();

    this.suggestFromSelector = elements.suggestFromSelector();
    this.suggestDestSelector = elements.suggestDestSelector();

    this.autoCompleteFromSelector = elements.autoCompleteFromSelector();
    this.autoCompleteDestSelector = elements.autoCompleteDestSelector();

    this.fromValue = elements.fromValue();
    this.destinationValue = elements.destinationValue();

    this.iataFromAutoCompleteSelector = elements.iataFromAutoCompleteSelector(); 
    this.iataDestAutoCompleteSelector = elements.iataDestAutoCompleteSelector(); 

    this.iataFromValue = elements.iataFromValue(); 
    this.iataDestValue = elements.iataDestValue(); 

    this.departureDateSelector = elements.departureDateSelector();
    this.returnDateSelector = elements.returnDateSelector();
    this.departureDate = elements.departureDate();
    this.departDateInput = elements.departDateInput();

    this.noReturnTicket = elements.noReturnTicket();

    this.passengerField = elements.passengerField();
    this.adultPassengerUp = elements.adultPassengerUp();
    this.passengerNum = elements.passengerNum();
    this.passengerCount = elements.passengerCount();
    this.searchFlights = elements.searchFlights();
  }

  async btnDarkTheme() {
    console.log(`dark theme click`)
    await expect(this.page.locator(this.btnDark)).toBeVisible();
    await this.page.locator(this.btnDark).click();
  }

  async checkOrigin(newTab){
    let origin;
    if (newTab != true){
      origin = flightData.fromFullValue
    } else {
      origin = flightData.from;
    }
    console.log(`check origin ${origin}`)
    await expect(this.page.locator(this.originResultPage)).toBeVisible()
    await expect(this.page.locator(this.originResultPage)).toHaveValue(origin);
  }

  async goto() {
    await this.page.goto('https://www.aviasales.com/');
  }

  async findHtmlLocator() {
    console.log(`check theme class`)
    await expect(this.page.locator(this.htmlLocator)).toHaveClass(this.themeClass);
  };

  async selectOrigin() {
    console.log(`selecting origin ${this.originCity} eh igual a ${flightData.from}`)
    await this.page.locator(this.fromField).click();
    await this.page.locator(this.fromField).fill(flightData.from);
    await this.page.locator(this.suggestFromSelector).click();
  };

  async selectDestination() {
    console.log(`selectind destination ${flightData.destination}`)
    await this.page.locator(this.destinationField).click();
    await this.page.locator(this.destinationField).fill(flightData.destination);
    await this.page.locator(this.suggestDestSelector).click();
    
  };

  async checkDestination() {
    console.log(`check destination ${this.destinationValue}`)
    await expect(this.page.locator('[data-test-id="destination-autocomplete-field"]')).toBeVisible();
    console.log(this.page.locator(this.autoCompleteDestSelector))
    await expect(this.page.locator(this.autoCompleteDestSelector)).toHaveValue(flightData.destinationFullValue);
  };

  async checkFromIataValue() {
    console.log(`Check iata ${this.iataFromValue}`)
    await expect(this.page.locator(this.iataFromAutoCompleteSelector)).toHaveText(flightData.iataFrom);
  };

  async checkDestIataValue() {
    console.log(`check destinantion iata ${this.iataDestValue}`)
    await expect(this.page.locator(this.iataDestAutoCompleteSelector)).toHaveText(flightData.iataDestination);
  };

  async selectDepartureDate() {
    console.log(this.departureDateSelector)
    console.log(this.departureDate)
    await this.page.locator(this.departureDateSelector).click();
    await this.page.locator(this.departureDate).click();
    await expect(this.page.locator(this.departDateInput)).toHaveValue(flightData.departureDate);
  };

  async checkDeptDate(){
    console.log(`Check date`)
    console.log(this.page.locator(this.departDateInput))
    await expect(this.page.locator(this.departDateInput)).toHaveValue(flightData.departureDate);
  };

  async selectReturnTicket() {
    console.log(`no return select`)
      await this.page.locator(this.noReturnTicket).click();
  };

  async checkReturnDate(){
    console.log(`check return date`)
    await expect(this.page.locator(this.returnDateSelector)).toBeEmpty();
  }

  async selectPassengers() {
    await this.page.locator(this.passengerField).click();
    await this.page.locator(this.adultPassengerUp).click();
  };

  async checkPassenger() {
    console.log(`checking passenger numbers ${this.passengerCount}`)
    await expect(this.page.locator(this.passengerNum).first()).toHaveText(flightData.passengerNumbers);
  };

  async searchFlightsClick() {
    this.page.waitForEvent('popup'),
    this.page.locator(this.searchFlights).click()
  };
}