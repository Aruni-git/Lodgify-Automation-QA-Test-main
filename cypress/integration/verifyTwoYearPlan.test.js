import { onPricingPage } from "../support/pageObjects/pricingPage";

const rentals = 33
const starter_Package = 56
const professional_Package = 273
const ultimate_Package = 457
const txtStarter = 'Starter'
const txtProfessional = 'Professional'
const txtUltimate = 'Ultimate'

context("Lodgify pricing page", () => {
  it("Should have the right title", () => {
    onPricingPage.navigateToPricingPage();
  });

  it("select two year plan", () => {
    onPricingPage.selectTwoYearPlan();
  });

  it("should be able navigate to the new page", () => {
  onPricingPage.navigateToTwoYearPlan()
  });

  
  it("should be able to add rentals", () => {
    onPricingPage.addRentals(rentals);
  });

  it("verify starter package for two year plan", () => {
    onPricingPage.verifyStarterPackage(starter_Package,txtStarter);
  });

  it("verify proffessional package for two year plan", () => {
    onPricingPage.verifyProfessionalPackageForTwoYear(professional_Package,txtProfessional);
  });

  it("verify ultimate package for two year plan", () => {
    onPricingPage.verifyUltimatePackageForTwoYears(ultimate_Package,txtUltimate);
  });
});
