/// <reference types = "Cypress"/>

describe('GET Job Tests for M9 Assignment', () => {

    it('verify job result list', () => {
        cy.request('http://api.jobka.net:8081/jobs/').then((response) => {
            console.log(response.body.content),
                expect(response.body.content).not.empty

        })
    })

    it('verify the date and company name in 7th element of the job list', () => {
        cy.request('http://api.jobka.net:8081/jobs/').then((response) => {
            console.log(response.body.content),
                expect(response.body.content[7]).have.property("date"),
                expect(response.body.content[7].date).not.null

            expect(response.body.content[7]).have.property("company")
            expect(response.body.content[7].company).equal("Orn Group")
        })

    })

    it('verify the description in 4th element of the job list', () => {
        cy.request('http://api.jobka.net:8081/jobs/').then((response) => {
            console.log(response.body.content),
                expect(response.body.content[4]).have.property("description")
            expect(response.body.content[4].description).equal("Future")

        })

    })

    it('verify the salary in 9th element of the job list', () => {
        cy.request('http://api.jobka.net:8081/jobs/').then((response) => {
            console.log(response.body.content),
                expect(response.body.content[9]).have.property("salary")
            expect(response.body.content[9].salary).equal("100k")

        })

    })

            it('error message wrong location request', () => {
                cy.request('http://api.jobka.net:8081/jobs/').then((response) => {
                    console.log(response.body.content),

                        expect(response.body.content[9]).have.property("location")
                    expect(response.body.content[9].location).equal("Moscow")
                })

            })

            it('search by seniority', () => {
                cy.request('http://api.jobka.net:8081/jobs/?seniority=Developer').then((response) => {
                    let resultsList = response.body.content
                    console.log(resultsList)
                    expect(response.status).equal(204)
                    for (let i = 0; i < resultsList.length; i++) {
                        expect(resultsList[i].seniority).equal('Developer')
                    }

                })

            })

            it('shows error message that job listing missing company details', () => {
                cy.request('http://api.jobka.net:8081/jobs/').then((response) => {
                    console.log(response.body.content),
                        expect(response.body.content[4]).have.property("company"),
                        expect(response.body.content[4].company).not.null

                })
            })

  })

       
