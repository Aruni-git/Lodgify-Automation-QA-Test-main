import { loremIpsum } from "lorem-ipsum";

export class contactPage {
navigateToContactPage() {
    //navigates to contact page
    cy.visit("http://localhost:3000/Contact.html");
    cy.title().should("include", "Contact");
  }

addName(){
    cy.get(':nth-child(1) > :nth-child(1) > .input > input').type('Aruni')
}

addPhone(){
    cy.get('[data-testid="phone-input"]').type('+94711530622')
}

addEmail(){
    cy.get('.eight > .input > input').type('aruni@gmail.com')
}

addcomment(){
    loremIpsum({
        count: 1,                // Number of "words", "sentences", or "paragraphs"
        format: "plain",         // "plain" or "html"
        paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
        paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
        random: Math.random,     // A PRNG function
        sentenceLowerBound: 5,   // Min. number of words per sentence.
        sentenceUpperBound: 15,  // Max. number of words per sentence.
        suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
        units: "sentences",      // paragraph(s), "sentence(s)", or "word(s)"
       
      })
    cy.get('.input > textarea').loremIpsum()
    }
    
addDate(){
   
    let date = new Date()
   
    cy.get('.DateRangePickerInput_calendarIcon').click()
    

    cy.get('[class="CalendarMonthGrid_month__horizontal CalendarMonthGrid_month__horizontal_1"]>[class="CalendarMonth CalendarMonth_1"] > :nth-child(1)').invoke('show')
    cy.get('[class="CalendarMonth_caption CalendarMonth_caption_1"]').should('have.text', 'April 2022').click()
    
}

clickSubmitButton(){
    cy.get('[type="submit"]').click()

}

verifyNameField(){

    cy.get(':nth-child(1) > :nth-child(1) > .input > .ui').should('have.text', 'Name is mandatory')

}

verifyEmail(){

    cy.get('.eight > .input > .ui').should('have.text', 'Email is mandatory')


}

verifyPhoneNumber(){

    cy.get(':nth-child(4) > .input > .ui').should('have.text', 'Phone is mandatory')

}

verifyComment(){

    cy.get(':nth-child(4) > .input > .ui').should('have.text', 'Comment is mandatory')

}

}

export const onContactPage = new contactPage();
