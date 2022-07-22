class Elements {
    constructor() {
        this.btn = '[data-test-id="switch"]';
        this.htmlLocator = "html";
        this.darkThemeClass = "page --home --us --night";
        this.fromSelector = '[data-test-id="origin-autocomplete-field"]';
        this.destinationSelector = '[data-test-id="destination-autocomplete-field"]';
        this.suggestFrom = '[data-test-id="suggest-JFKairport"]';
        this.suggestDestination = '[data-test-id="suggest-BERcity"]';
        this.iataFromAutoComplete = '[data-test-id="autocomplete-origin"] span';
        this.iataDestAutoComplete = '[data-test-id="autocomplete-destination"] span'
        this.departureDateField = '[data-test-id="departure-date-field"]';
        this.departureDateInput = '[data-test-id="departure-date-input"]'
        this.returnDateField = '[data-test-id="return-date-field"]';
        this.depDate = '[aria-label="Sat Jul 30 2022"]';
        this.returnTicket = '[data-test-id="no-return-ticket"]';
        this.passengers = '[data-test-id="passengers-field"]';
        this.incrementAdultPassenger = '[data-test-id="passengers-adults-field"] a >> nth=1';
        this.passengerNumField = '[data-test-id="passengers-field"] .additional-fields__label';
        this.btnSearch = '[data-test-id="form-submit"]';
        this.originResult = '[data-test-id="origin-autocomplete-field"]';
    }    

    btnDarkTheme = () => {
        return this.btn;
    };

    htmlLocatorElement = () => {
        return this.htmlLocator;
    };

    themeClass = () => {
        return this.darkThemeClass;
    };

    fromField = () => {
        return this.fromSelector;
    };

    destinatioFieldSelector = () => {
        return this.destinationSelector;
    };

    originCity = () => {
        return this.origin;
    };

    destinationCity = () => {
        return this.destination;
    };

    suggestFromSelector = () => {
        return this.suggestFrom;
    };

    suggestDestSelector = () => {
        return this.suggestDestination;
    };

    suggestDestSelector = () => {
        return this.suggestDestination;
    };

    autoCompleteFromSelector = () => {
        return this.fromSelector;
    };

    autoCompleteDestSelector = () => {
        return this.destinationSelector;
    };

    fromValue = () => {
        return this.fromFullValue;
    };

    destinationValue = () => {
        return this.destinationFullValue;
    };

    iataFromAutoCompleteSelector = () => {
        return this.iataFromAutoComplete
    }

    iataDestAutoCompleteSelector = () => {
        return this.iataDestAutoComplete
    }

    iataFromValue = () => {
        return this.iataFrom;
    }

    iataDestValue = () => {
        return this.iataDestination;
    }

    destinatioFieldSelector = () => {
        return this.destinationSelector
    };

    departureDateSelector = () => {
        return this.departureDateField;
    };

    departDateInput = () => {
        return this.departureDateInput;
    };

    returnDateSelector = () => {
        return this.returnDateField;
    };

    departureDate = () => {
        return this.depDate;
    };

    noReturnTicket = () => {
        return this.returnTicket;
    };

    passengerField = () => {
        return this.passengers;
    };

    adultPassengerUp = () => {
        return this.incrementAdultPassenger;
    };

    passengerNum = () => {
        return this.passengerNumField
    };

    passengerCount = () => {
        return this.passengerNumbers;
    };

    searchFlights = () => {
        return this.btnSearch;
    };

    originResultPage = () => {
        return this.originResult
    };
}

module.exports = {Elements}