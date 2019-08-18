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

  it('renders one <RefreshControl /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find(RefreshControl)).to.have.lengthOf(1);
  });

  it('renders one <FlatList /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find(FlatList)).to.have.lengthOf(1);
  });

  it('renders one <TouchableOpacity /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find(TouchableOpacity)).to.have.lengthOf(1);
  });

  it('renders one <View /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find(View)).to.have.lengthOf(1);
  });

  it('renders one <Text /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find(Text)).to.have.lengthOf(2);
  });

  it('renders one <ActivityIndicator /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    expect(wrapper.find(ActivityIndicator)).to.have.lengthOf(1);
  });

  // it('renders an `.icon-star`', () => {
  //   const wrapper = shallow(<HomeScreen />);
  //   expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  // });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <HomeScreen>
  //       <div className="unique" />
  //     </HomeScreen>
  //   ));
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  it('simulates click events', () => {
    const onPress = sinon.spy();
    const wrapper = shallow(<TouchableOpacity onPress={this._onPressPost()} />);
    wrapper.find('button').simulate('click');
    expect(this._onPressPost()).to.have.property('callCount', 1);
  });
});

