/// <reference types ="cypress" />

describe('API Validation', () => {
  it('1st endpoint verification', () => {
    cy.request({
      url: '/posts'
    }).then((res) => {
      // cy.log(res)
      // console.log(res)
      expect(res.status).to.eq(200)
    })
  })

  
})
describe('API Validation', () => {
    it('2nd endpoint verification', () => {
        cy.request({
          url: '/posts/a'
        }).then((res) => {
          // cy.log(res)
          // console.log(res)
          expect(res.status).to.eq(200)
        })
    })
})

describe('API Validation', () => {
    it('3rd endpoint verification', () => {
        cy.request({
          url: '/posts/1/comments'
        }).then((res) => {
          // cy.log(res)
          // console.log(res)
          expect(res.status).to.eq(200)
        })
      })
})