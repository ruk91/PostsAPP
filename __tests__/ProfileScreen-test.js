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
import { 
  View, 
  Text, 
  Image,
  FlatList, 
  ActivityIndicator, 
  TouchableOpacity, 
  ScrollView, 
  RefreshControl,
  Dimensions
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import ProfileScreen from '../app/views/ProfileScreen';

configure({adapter: new Adapter()});

describe('<ProfileScreen />', () => {

  it('renders one <ScrollView /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    expect(wrapper.find(ScrollView)).to.have.lengthOf(1);
  });

  it('renders one <View /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    expect(wrapper.find(View)).to.have.lengthOf(5);
  });

  it('renders one <Text /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    expect(wrapper.find(Text)).to.have.lengthOf(2);
  });

  it('renders one <Image /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    expect(wrapper.find(Image)).to.have.lengthOf(1);
  });

  it('renders one <FlatList /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    expect(wrapper.find(FlatList)).to.have.lengthOf(1);
  });

  it('renders one <TouchableOpacity /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    expect(wrapper.find(TouchableOpacity)).to.have.lengthOf(1);
  });

  it('renders one <ActivityIndicator /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    expect(wrapper.find(ActivityIndicator)).to.have.lengthOf(1);
  });

  // it('renders an `.icon-star`', () => {
  //   const wrapper = shallow(<ProfileScreen />);
  //   expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  // });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <ProfileScreen>
  //       <div className="unique" />
  //     </ProfileScreen>
  //   ));
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  it('simulates click events', () => {
    const onPress = sinon.spy();
    const wrapper = shallow(<TouchableOpacity onPress={this._onPressImage()} />);
    wrapper.find('button').simulate('click');
    expect(this._onPressImage()).to.have.property('callCount', 1);
  });
});

