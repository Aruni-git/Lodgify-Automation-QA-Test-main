export class pricingPage {
  
  navigateToPricingPage() {
    //navigates to pricing page
    cy.visit("pricing.html");
    cy.title().should("include", "Pricing");
  }

  addRentals(rentals) {
    //add nubmer of rentals
    cy.get(".property-scroll-box").should("be.visible");

    cy.get("input[type=number]").invoke("val", rentals).trigger("change");
  }

  //select yearly plan
  selectyearlyPlan() {
    cy.get(".nav-magic-line").click();
  }

  //select two year plan
  selectTwoYearPlan() {
    cy.window().then((win) => {
      cy.get('[data-price-period="3"] > a > :nth-child(1)').click();
      cy.stub(win, "open").as("windowOpen");
    });
  }

  //select monthly plan
  selectMonthlyPlan() {
    cy.get('[data-price-period="1"] > span').click();
  }

  //starter package
  verifyStarterPackage(starter_Package, txtStarter) {
    cy.contains("Starter").should("have.text", txtStarter);
    cy.get(
      ".price-card-starter > .price-item > :nth-child(1) > .plan-price > .total-sum"
    ).should("have.text", starter_Package);
  }

  //professional package
  verifyProfessionalPackage(professional_Package, txtProfessional) {
    cy.contains("Professional").should("have.text", txtProfessional);
    cy.get(
      ":nth-child(2) > .price-item > :nth-child(1) > .plan-price > .total-sum"
    ).should("have.text", professional_Package);
  }
  //professional package - two year plan
  verifyProfessionalPackageForTwoYear(professional_Package, txtProfessional) {
    cy.contains("Professional").should("have.text", txtProfessional);
    cy.get(
      ":nth-child(3) > .price-item > :nth-child(1) > .plan-price > .total-sum"
    ).should("have.text", professional_Package);
  }

  //ultimate package
  verifyUltimatePackage(ultimate_Package, txtUltimate) {
    cy.contains("Ultimate").should("have.text", txtUltimate);
    cy.wait(2000);
    cy.get(
      ":nth-child(3) > .price-item > :nth-child(1) > .plan-price > .total-sum"
    ).should("have.text", ultimate_Package);
  }

  //ultimate package - two years
  verifyUltimatePackageForTwoYears(ultimate_Package, txtUltimate) {
    cy.contains("Ultimate").should("have.text", txtUltimate);
    cy.get(
      ":nth-child(4) > .price-item > :nth-child(1) > .plan-price > .total-sum"
    ).should("have.text", ultimate_Package);
  }

  //change the currency to pound
  changeCurrecyToPound(currency) {
    cy.get("select").select(currency);
  }

  //navigate to two year plan
  navigateToTwoYearPlan() {
    cy.visit("https://www.lodgify.com/pricing/#");
  }
}

export const onPricingPage = new pricingPage();
