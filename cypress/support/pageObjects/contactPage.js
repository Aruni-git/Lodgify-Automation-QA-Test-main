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
          min: 4
        },
        wordsPerSentence: {
          max: 16,
          min: 4
        }
      });
     
     let txtComment = lorem.generateSentences(3); 

    cy.get(".input > textarea").type(txtComment);
  }

  addDate() {
    let date = new Date();

    cy.get(".DateRangePickerInput_calendarIcon").click();

    cy.get(
      '[class="CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1"]>[class="CalendarMonth CalendarMonth_1"] > :nth-child(1)'
    ).invoke("show");
    cy.get('[class="CalendarMonth_caption CalendarMonth_caption_1"]')
      .should("have.text", "April 2022")
      .click();
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
