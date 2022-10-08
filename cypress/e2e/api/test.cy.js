/// <reference types ="cypress" />

describe('1st endpoint', () => {
  it('endpoint verification', () => {
    cy.request({
      method: 'GET',
      url: '/posts'
    }).then((res) => {
      cy.log(res)
      // console.log(res)
      expect(res.status).to.eq(200)
    })
  })
  it('2nd endpoint verification', () => {
    cy.request({
      method: 'GET',
      url: '/posts/a',
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(200)
    })
  })

  it('3rd endpoint verification', () => {
    cy.request({
      method: 'GET',
      url: '/posts/1'
    }).then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body).have.property("title")
      expect(res.body).have.property("body")
      expect(res.body).have.property("id")
      // cy.log()
    })
  })

})