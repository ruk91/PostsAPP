/**
 * @format
 */

import 'react-native';
import React from 'react';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, ScrollView, RefreshControl, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from '../app/views/HomeScreen';

configure({adapter: new Adapter()});

describe('<HomeScreen />', () => {
  it('renders one <ScrollView /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find(ScrollView)).to.have.lengthOf(1);
  });

  it('renders an `.icon-star`', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <HomeScreen>
        <div className="unique" />
      </HomeScreen>
    ));
    expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});

