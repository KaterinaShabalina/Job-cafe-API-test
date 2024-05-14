/// <reference types = "Cypress"/>

describe('Get Jobs Test', () => {

it('gets all jobs', () => {
cy.request('http://api.jobka.net:8081/jobs/').then((response) =>{
console.log(response),
expect(response.status).equal(200),
expect(response.statusText).equal("OK")

})

  })

  it('verify job result list', () => {
    cy.request('http://api.jobka.net:8081/jobs/').then((response) =>{
    console.log(response.body.content),
    expect(response.body.content).not.empty
    
    })
    
      })

      it('job listing has all details', () => {
        cy.request('http://api.jobka.net:8081/jobs/').then((response) =>{
        console.log(response.body.content),
        expect(response.body.content[0]).have.property("id"),
        expect(response.body.content[0].id).not.null

        })
        
          })

          it('job listing has all details', () => {
            cy.request('http://api.jobka.net:8081/jobs/').then((response) =>{

            var result = response.body.content[1]
            console.log(result);
            expect(result).have.property("id")
            expect(result.id).equal("65428d7c3f7d791f7b3e7b62")  

            expect(result).have.property("location")
            expect(result.location).equal("New Guiseppe")  


            expect(result).have.property("position")
            expect(result.position).equal("Global Web Designer")  

            expect(result).have.property("link")
            expect(result.link).contain("http")  

          })

})


it('search by location', () => {
  cy.request('http://api.jobka.net:8081/jobs/?location=Toronto').then((response) =>{
 let resultsList = response.body.content
console.log(resultsList)
expect(response.status).equal(200)
for(let i=0; i<resultsList.length; i++) {
expect(resultsList[i].location).equal('Toronto, ON, Canada')

}

})

})

})