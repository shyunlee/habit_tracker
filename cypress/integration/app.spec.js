/// <reference types="cypress" />
import '@testing-library/cypress/add-commands';


describe('Habit Track', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('render', () => {
    cy.findByText('My Habits').should('exist')
  })

  it('adds new habit at the end' , () => {
    cy.findByPlaceholderText('Habit').type('New Habbit')
    cy.findByText('Add').click()
    cy.findAllByTestId('habit-name').last().should('have.text', 'New Habbit')
    cy.findAllByTestId('habit-count').last().should('have.text', '0')
  })

  it("increase count", () => {
    cy.findAllByTitle('increase').first().click()
    cy.findAllByTestId('habit-count').first().should('have.text', '1')
  })

  it("decrease count", () => {
    cy.findAllByTitle('increase').first().click()
    cy.findAllByTitle('increase').first().click()
    cy.findAllByTitle('decrease').first().click()

    cy.findAllByTestId('habit-count').first().should('have.text', '1')
  })

  it('should not be below 0 when decrease', () => {
    cy.findAllByTitle('decrease').first().click()
    cy.findAllByTestId('habit-count').first().should('have.text', '0')

  })

  it('shows active total count on the header', () => {
    cy.findAllByTitle('increase').first().click()
    cy.findAllByTitle('increase').last().click()
    cy.findByTestId('total-count').should('have.text', '2')
  })

  it('reset to 0 when clicking reset all button', () => {
    cy.findAllByTitle('increase').first().click()
    cy.findAllByTitle('increase').last().click()
    cy.findByText('Reset All').click()
    cy.findByTestId('total-count').should('have.text', '0')
    cy.findAllByTestId('habit-count').each((item) => {
      cy.wrap(item).should('have.text', '0')
    })
  })

  it('deletes an item', () => {
    cy.findAllByTitle('delete').first().click()
    cy.findAllByTestId('habit-name').first().should('not.have.text', 'Reading')
  })
})

