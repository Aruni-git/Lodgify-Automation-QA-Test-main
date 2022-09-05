import { onPricingPage } from "../support/pageObjects/pricingPage";

const rentals = 63
const starter_Package = 101
const professional_Package = 648
const ultimate_Package = 889

context("Lodgify pricing page", () => {
  it("Should have the right title", () => {
    onPricingPage.navigateToPricingPage();
  });

  it("should be able to add rentals", () => {
    onPricingPage.addRentals(rentals);
  });

  it("select monthly plan", () => {
    onPricingPage.selectMonthlyPlan();
  });

  it("verify starter package - monthly plan", () => {
    onPricingPage.verifyStarterPackage(starter_Package);
  });

  it("verify proffessional package - monthly plan", () => {
    onPricingPage.verifyProfessionalPackage(professional_Package);
  });

  it("verify ultimate package - monthly plan", () => {
    onPricingPage.verifyUltimatePackage(ultimate_Package);
  });

});
