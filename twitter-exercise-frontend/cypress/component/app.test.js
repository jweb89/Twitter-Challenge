/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'cypress-react-unit-test';
import App from '../../src/App';

describe('App check', () => {
  it('check that tweets are loaded on click', () => {
    mount(<App />);
    cy.contains('@elonmusk').click();
    cy.get('[data-cy=tweet]').should('have.length', 20);
  });

  it('check more tweets are rendered on scroll', () => {
    mount(<App />);
    cy.contains('@spacex').click();
    cy.get('[data-cy=tweet]')
      .last()
      .scrollIntoView({ duration: 3000, easing: 'linear' });
    // cy.scrollTo('bottom');
    cy.get('[data-cy=tweet]').should('have.length.at.least', 21);
  });

  it('check if menu causes snap to top', () => {
    mount(<App />);
    cy.contains('@spacex').click();
    cy.get('[data-cy=tweet]')
      .last()
      .scrollIntoView({ duration: 3000, easing: 'linear' });
    // cy.scrollTo('bottom');
    cy.contains('@spacex').click();
    cy.window().its('scrollY').should('equal', 0);
  });

  it('check that on different twitter handle click the tweet list changes', () => {
    mount(<App />);
    cy.contains('@elonmusk').click();
    cy.get('[data-cy=tweet]').each((item) => {
      cy.wrap(item).should('contain.text', 'elonmusk');
    });

    cy.contains('@spacex').click();

    cy.get('[data-cy=tweet]').each((item) => {
      cy.wrap(item).should('contain.text', 'SpaceX');
    });
  });
});
