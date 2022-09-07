import { onContactPage } from "../support/pageObjects/contactPage";

const name = "Aruni";
const email = "aruniscrabble@yahoo.com";
const phone = +9471156455;
const arrivalMonth = "September 2022";
const departureMonth = "October 2022";
const arrivalDate = 10;
const departureDate = 12;
const contactUrl = "http://localhost:3000/Contact.html";
const txtContact = "Contact";

describe("Lodgify contact page", () => {
  beforeEach("Should have the right title", () => {
    onContactPage.navigateToContactPage(contactUrl, txtContact);
  });

  it("verify add a record", () => {
    onContactPage.addName(name);
    onContactPage.addEmail(email);
    onContactPage.addPhone(phone);
    onContactPage.addArrival_DepartureDates(
      arrivalMonth,
      departureMonth,
      arrivalDate,
      departureDate
    );
    onContactPage.addcomment();
    onContactPage.clickSubmitButton();
  });
});
