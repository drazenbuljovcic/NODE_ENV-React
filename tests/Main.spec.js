/* global describe */
/* global it */


import React from 'react';
import { Home } from '~/components/Home';

import { expect } from 'chai';
import { mount } from 'enzyme';

function setup() {
  const props = {};

  const wrapper = mount(<Home />);

  return {
    props,
    wrapper
  };
}

describe('Main app component', () => {

  it('renders without crashing', () => {
    const { wrapper } = setup();

    expect(wrapper.find('img').hasClass('main-image')).to.equal(true);
  });
});

