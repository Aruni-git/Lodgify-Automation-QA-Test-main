import { LoremIpsum } from "lorem-ipsum";

export class contactPage {
  navigateToContactPage() {
    //navigates to contact page
    cy.visit("http://localhost:3000/Contact.html");
    cy.title().should("include", "Contact");
  }

  addName(name) {
    cy.get(":nth-child(1) > :nth-child(1) > .input > input").type(name);
  }

  addPhone(phone) {
    cy.get('[data-testid="phone-input"]').type(phone);
  }

  addEmail(email) {
    cy.get(".eight > .input > input").type(email);
  }

  addcomment() {
    const lorem = new LoremIpsum({
      sentencesPerParagraph: {
        max: 8,
        min: 4,
      },
      wordsPerSentence: {
        max: 16,
        min: 4,
      },
    });

    let txtComment = lorem.generateSentences(3);

    cy.get(".input > textarea").type(txtComment);
  }

  addArrival_DepartureDates(arrivalMonth,departureMonth,arrivalDate,departureDate) {
    let date = new Date();
    let month = date.toLocaleDateString("default", { month: "long" });
    let yearOfDate = date.getFullYear();
    let currentMonth = month + " " + yearOfDate;
    cy.get('[aria-label="Arrival"]').click();

    cy.get(
      '[class="CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1"]>[class="CalendarMonth CalendarMonth_1"] > :nth-child(1)'
    ).invoke("show");

    cy.get("div")
      .contains(currentMonth)
      .then(
        (dateAttribute) => {
          if (currentMonth !== arrivalMonth) {
            cy.get(
              ".DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal"
            ).click();
            cy.selectMonth(currentMonth, arrivalMonth,arrivalDate,departureDate,departureMonth);
            cy.get(
              ".DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal"
            ).click();
            }   
            //added in wrong place 
            cy.xpath("//div[@class='CalendarMonth CalendarMonth_1']/div[contains(text(), '"+arrivalMonth+"')]/../table[@class='CalendarMonth_table CalendarMonth_table_1']//td[@aria-disabled='false' and contains(text(),'"+arrivalDate+"')] ").click();
            cy.xpath("//div[@class='CalendarMonth CalendarMonth_1']/div[contains(text(), '"+departureMonth+"')]/../table[@class='CalendarMonth_table CalendarMonth_table_1']//td[@aria-disabled='false' and contains(text(),'"+departureDate+"')] ").click();
          
        }
      );
  }

  //departure date

  addDepartureDate(departureMonth) {
    let date = new Date();
    let month = date.toLocaleDateString("default", { month: "long" });
    let yearOfDate = date.getFullYear();
    let currentMonth = month + " " + yearOfDate;
    cy.get('[aria-label="Arrival"]').click();

    cy.get(
      '[class="CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1"]>[class="CalendarMonth CalendarMonth_1"] > :nth-child(1)'
    ).invoke("show");

    cy.get("div")
      .contains(currentMonth)
      .then(
        (dateAttribute) => {
          if (dateAttribute !== departureMonth) {
            cy.get(
              ".DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal"
            ).click();
            cy.random_string_gen();
            cy.get(
              ".DayPickerNavigation_leftButton__horizontalDefault > .DayPickerNavigation_svg__horizontal"
            ).click();
          
          } else {
            cy.get(
              '[aria-label="Not available.Wednesday, June 14, 2022"]'
            ).click();

            
          }
        }
        
      );
  }

  addDate2(arrivalMonth,departureMonth,arrivalDate,departureDate) {
  
    cy.get('[aria-label="Arrival"]').click();

    cy.get(
      '[class="CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1"]>[class="CalendarMonth CalendarMonth_1"] > :nth-child(1)'
    ).invoke("show");
    
   cy.xpath("//div[@class='CalendarMonth CalendarMonth_1']/div[contains(text(), '"+arrivalMonth+"')]/../table[@class='CalendarMonth_table CalendarMonth_table_1']//td[@aria-disabled='false' and contains(text(),'"+arrivalDate+"')] ").click();
   cy.xpath("//div[@class='CalendarMonth CalendarMonth_1']/div[contains(text(), '"+departureMonth+"')]/../table[@class='CalendarMonth_table CalendarMonth_table_1']//td[@aria-disabled='false' and contains(text(),'"+departureDate+"')] ").click();
  }

  clickSubmitButton() {
    cy.get('[type="submit"]').click();
  }

  verifyNameField(expectedText_name) {
    cy.get(":nth-child(1) > :nth-child(1) > .input > .ui").should(
      "have.text",
      expectedText_name
    );
  }

  verifyEmail(expectedText_email) {
    cy.get(".eight > .input > .ui").should("have.text", expectedText_email);
  }

  verifyPhoneNumber(expectedText_phone) {
    cy.get(":nth-child(4) > .input > .ui").should(
      "have.text",
      expectedText_phone
    );
  }

  verifyComment(expectedText_comment) {
    cy.get(":nth-child(4) > .input > .ui").should(
      "have.text",
      expectedText_comment
    );
  }
}

export const onContactPage = new contactPage();
