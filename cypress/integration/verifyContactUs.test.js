import { onContactPage } from "../support/pageObjects/contactPage";

const name = "Aruni"
const email = "aruniscrabble@yahoo.com"
const phone = +9471156455
const arrivalMonth = 'September 2022'
const departureMonth = 'October 2022'
const arrivalDate = 10
const departureDate =12

  describe('Lodgify contact page', () =>{

    beforeEach('Should have the right title', () =>{
       
      onContactPage.navigateToContactPage()
}) 

  it("verify add a record", () => {

    onContactPage.addName(name)
    onContactPage.addEmail(email)
    onContactPage.addPhone(phone)
    //onContactPage.addDate2(arrivalMonth,departureMonth,arrivalDate,departureDate)
    onContactPage.addArrival_DepartureDates(arrivalMonth,departureMonth,arrivalDate,departureDate)
    onContactPage.addcomment()
    //onContactPage.clickSubmitButton()
   
  })
})