import React from 'react';
import { shallow } from 'enzyme';
import About from '../../components/HomeComponent';

const wrapper = shallow(<About />);

describe('Home Component', () => {
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).toEqual('Welcome to the React Boilerplate!');
  });

  it('renders p', () => {
    expect(wrapper.find('p').text()).toEqual('This is the home page.');
  });
});
