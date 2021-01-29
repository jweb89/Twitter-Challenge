/* eslint-disable no-undef */
import { mount } from 'cypress-react-unit-test';
import Tweet from '../../src/components/Tweet';

const data = {
  date: 'Thu Jan 28 12:20:06 +0000 2021',
  text:
    '@teslascope We’re switching to a more sensible FSD version numbering to distinguish between major &amp; minor updates. Current build is FSD 8.1. It drove me to an unfamiliar location in LA &amp; back last night with no interventions!',
  hashtags: ['#spacex', 'elonmusk'],
  profileImage: 'http://abs.twimg.com/images/themes/theme1/bg.png',
  name: 'elonmusk',
};

describe('tweet tests', () => {
  it('tweet snapshot test', () => {
    mount(
      <Tweet
        date={data.date}
        text={data.text}
        hashtags={data.hashtags}
        profileImage={data.profileImage}
        name={data.name}
      />
    );
    cy.get('[data-cy=tweet]').snapshot();
  });
});
