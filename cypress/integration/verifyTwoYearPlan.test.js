import { onPricingPage } from "../support/pageObjects/pricingPage";

const rentals = 33
const starter_Package = 56
const professional_Package = 273
const ultimate_Package = 457

context("Lodgify pricing page", () => {
  it("Should have the right title", () => {
    onPricingPage.navigateToPricingPage();
  });

  it("select two year plan", () => {
    onPricingPage.selectTwoYearPlan();
  });

  it("should be able navigate to the new page", () => {
  cy.visit("https://www.lodgify.com/pricing/#")
  });

  
  it("should be able to add rentals", () => {
    onPricingPage.addRentals(rentals);
  });

  it("verify starter package for two year plan", () => {
    onPricingPage.verifyStarterPackage(starter_Package);
  });

  it("verify proffessional package for two year plan", () => {
    onPricingPage.verifyProfessionalPackageForTwoYear(professional_Package);
  });

  it("verify ultimate package for two year plan", () => {
    onPricingPage.verifyUltimatePackage(ultimate_Package);
  });
});
