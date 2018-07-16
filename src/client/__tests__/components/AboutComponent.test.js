import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/AboutComponent';

const wrapper = shallow(<About />);

describe('About Component', () => {
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).toEqual('About');
  });
});
