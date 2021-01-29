/* eslint-disable no-undef */
import React from 'react';
import { mount } from 'cypress-react-unit-test';
import App from '../../src/App';
import Menu from '../../src/components/Menu';

describe('App check', () => {
  it('Check buttons are rendered correctly', () => {
    mount(<App />);
    cy.contains('@elonmusk').should('be.visible');
    cy.contains('@spacex').should('be.visible');
  });

  describe('menu tests', () => {
    it('menu snapshot test', () => {
      mount(<Menu />);
      cy.get('[data-cy=menu]').snapshot();
    });
  });
});
