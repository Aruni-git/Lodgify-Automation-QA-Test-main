import { onPricingPage } from "../support/pageObjects/pricingPage";

const rentals = 25;
const currency = "gbp";
const starter_Package = 41;
const professional_Package = 171;
const ultimate_Package = 246;
const txtStarter = "Starter";
const txtProfessional = "Professional";
const txtUltimate = "Ultimate";
const pricingUrl = "pricing.html";
const txtPricing = "Pricing";

context("Lodgify pricing page", () => {
  it("Should have the right title", () => {
    onPricingPage.navigateToPricingPage(pricingUrl, txtPricing);
  });

  it("should be able to add rentals", () => {
    onPricingPage.addRentals(rentals);
  });

  it("select yearly plan", () => {
    onPricingPage.selectyearlyPlan();
  });

  it("select currency dropdown", () => {
    onPricingPage.changeCurrecyToPound(currency);
  });

  it("verify starter packaage for yearly plan GBP", () => {
    onPricingPage.verifyStarterPackage(starter_Package, txtStarter);
  });

  it("verify proffessional packaage for yearly plan GBP", () => {
    onPricingPage.verifyProfessionalPackage(
      professional_Package,
      txtProfessional
    );
  });

  it("verify ultimate packaage for yearly plan GBP", () => {
    onPricingPage.verifyUltimatePackage(ultimate_Package, txtUltimate);
  });
});
