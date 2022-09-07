import { onContactPage } from "../support/pageObjects/contactPage";

const name = "Aruni";
const email = "aruniscrabble@yahoo.com";
const phone = +9471156455;
const arrivalMonth = "April 2022";
const departureMonth = "June 2022";
const arrivalDate = 14;
const departureDate = 14;
const expectedText_name = "Name is mandatory";
const expectedText_email = "Email is mandatory";
const expectedText_phone = "Phone is mandatory";
const expectedText_comment = "Comment is mandatory";
const contactUrl = "http://localhost:3000/Contact.html";
const txtContact = "Contact";

describe("Lodgify contact page", () => {
  beforeEach("Should have the right title", () => {
    onContactPage.navigateToContactPage(contactUrl, txtContact);
  });

  it("verify name is mandatory", () => {
    onContactPage.addEmail(email);
    onContactPage.addPhone(phone);
    onContactPage.addcomment();
    onContactPage.clickSubmitButton();
    onContactPage.verifyNameField(expectedText_name);
  });

  it("verify email is mandatory", () => {
    onContactPage.addName(name);
    onContactPage.addPhone(phone);
    onContactPage.addcomment();
    onContactPage.clickSubmitButton();
    onContactPage.verifyEmail(expectedText_email);
  });

  it("verify phone is mandatory", () => {
    onContactPage.addName(name);
    onContactPage.addEmail(email);
    onContactPage.addcomment();
    onContactPage.clickSubmitButton();
    onContactPage.verifyPhoneNumber(expectedText_phone);
  });

  it("verify comment is mandatory", () => {
    onContactPage.addName(name);
    onContactPage.addEmail(email);
    onContactPage.addPhone(phone);
    onContactPage.clickSubmitButton();
    onContactPage.verifyComment(expectedText_comment);
  });

  it("verify date picker when adding past date as arrival date and departure date", () => {
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
