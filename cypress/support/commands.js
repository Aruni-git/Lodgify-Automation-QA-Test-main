// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//select arrival month
Cypress.Commands.add(
  "selectMonth",
  function selectMonth(
    currentMonth,
    arrivalMonth,
    arrivalDate,
    departureDate,
    departureMonth
  ) {
    cy.get("div")
      .contains(currentMonth)
      .then((dateAttribute) => {
        debugger;
        if (currentMonth != arrivalMonth) {
          cy.get(
            ".DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal"
          ).click();
          debugger;

          cy.xpath(
            "//div[@class='CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1 CalendarMonthGrid_month__hideForAnimation CalendarMonthGrid_month__hideForAnimation_2 CalendarMonthGrid_month__hidden CalendarMonthGrid_month__hidden_3']/div[@class='CalendarMonth CalendarMonth_1']/div[@class='CalendarMonth_caption CalendarMonth_caption_1']"
          )
            .invoke("text")
            .then((text1) => {
              currentMonth = text1;
              cy.get(
                ".DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal"
              ).click();
              return selectMonth(
                currentMonth,
                arrivalMonth,
                arrivalDate,
                departureDate,
                departureMonth
              );
            });
        }

        cy.xpath(
          "//div[@class='CalendarMonth CalendarMonth_1']/div[contains(text(), '" +
            arrivalMonth +
            "')]/../table[@class='CalendarMonth_table CalendarMonth_table_1']//td[@aria-disabled='false' and contains(text(),'" +
            arrivalDate +
            "')] "
        ).click();
        cy.xpath(
          "//div[@class='CalendarMonth CalendarMonth_1']/div[contains(text(), '" +
            departureMonth +
            "')]/../table[@class='CalendarMonth_table CalendarMonth_table_1']//td[@aria-disabled='false' and contains(text(),'" +
            departureDate +
            "')] "
        ).click();
      });
  }
);
