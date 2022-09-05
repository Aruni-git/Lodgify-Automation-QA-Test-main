import { onContactPage } from "../support/pageObjects/contactPage";

const rentals = 65
const starter_Package = 41
const professional_Package = 171
const ultimate_Package = 246

  describe('Lodgify contact page', () =>{

    beforeEach('Should have the right title', () =>{
       
      onContactPage.navigateToContactPage()
}) 

  it("verify name is mandatory", () => {

    onContactPage.addEmail()
    onContactPage.addPhone()
    onContactPage.addcomment()
    onContactPage.clickSubmitButton()
    onContactPage.verifyNameField()
    

  });

  // it("verify email is mandatory", () => {

  //   onContactPage.addName()
  //   onContactPage.addPhone()
  //   onContactPage.clickSubmitButton()
  //   onContactPage.verifyEmail()
    

  // });

  // it("verify phone is mandatory", () => {

  //   onContactPage.addName()
  //   onContactPage.addEmail()
  //   onContactPage.addPhone()
  //   onContactPage.clickSubmitButton()
  //   onContactPage.verifyPhoneNumber()
   

  // });

//   it("verify comment is mandatory", () => {
//     //onContactPage.clickSubmitButton()
//     onContactPage.verifyComment()
    
//   });

  it("verify date picker", () => {
    //onContactPage.clickSubmitButton()
    onContactPage.addDate()
    
  });
 
});
