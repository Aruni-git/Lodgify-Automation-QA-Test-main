import { onPricingPage } from "../support/pageObjects/pricingPage";

const rentals = 50
const starter_Package = 64
const professional_Package = 375
const ultimate_Package = 525
const txtStarter = 'Starter'
const txtProfessional = 'Professional'
const txtUltimate = 'Ultimate'

context("Lodgify pricing page", () => {
  it("Should have the right title", () => {
    onPricingPage.navigateToPricingPage();
  });

  it("should be able to add rentals", () => {
    onPricingPage.addRentals(rentals);
  });

  it("select yearly plan", () => {
    onPricingPage.selectyearlyPlan();
  });

  it("verify starter package for yearly plan", () => {
    onPricingPage.verifyStarterPackage(starter_Package,txtStarter);
  });

  it("verify proffessional package for yearly plan", () => {
    onPricingPage.verifyProfessionalPackage(professional_Package,txtProfessional);
  });

  it("verify ultimate package for yearly plan", () => {
    onPricingPage.verifyUltimatePackage(ultimate_Package,txtUltimate);
  });

});
