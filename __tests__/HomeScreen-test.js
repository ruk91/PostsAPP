/**
 * @format
 */

import 'react-native';
import React from 'react';
import { expect as chaiExpect } from 'chai'
import Enzyme from 'enzyme';
import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity, ScrollView, RefreshControl, Dimensions} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import HomeScreen from '../app/views/HomeScreen';

configure({adapter: new Adapter()});
// Enzyme.configure({ adapter: new Adapter() });

describe('<HomeScreen />', () => {

  it('Should render successfully', () => {
    const component = shallow(<HomeScreen />);
    chaiExpect(component.exists()).toEqual(true);
  });

  it('renders one <ScrollView/> components', () =>{
    const wrapper = shallow(<HomeScreen />)
    chaiExpect(wrapper.find(ScrollView)).toHaveLength(1)
  })

  it('renders one <ScrollView /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    chaiExpect(wrapper.find(ScrollView)).to.have.lengthOf(1);
  });

  it('renders one <RefreshControl /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    chaiExpect(wrapper.find(RefreshControl)).to.have.lengthOf(1);
  });

  it('renders one <FlatList /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    chaiExpect(wrapper.find(FlatList)).to.have.lengthOf(1);
  });

  it('renders one <TouchableOpacity /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    chaiExpect(wrapper.find(TouchableOpacity)).to.have.lengthOf(1);
  });


  it('renders one <Text /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    chaiExpect(wrapper.find(Text)).to.have.lengthOf(2);
  });

  it('renders one <ActivityIndicator /> components', () => {
    const wrapper = shallow(<HomeScreen />);
    chaiExpect(wrapper.find(ActivityIndicator)).to.have.lengthOf(1);
  });

  it('simulates click events', () => {
    const onPress = sinon.spy();
    const wrapper = shallow(<TouchableOpacity onPress={this._onPressPost()} />);
    wrapper.find('button').simulate('click');
    chaiExpect(this._onPressPost()).to.have.property('callCount', 1);
  });
});

describe('post viewing flow', () => {
    
  it('should redirect to profile', async () => {
    await device.reloadReactNative();
    await expect(element(by.id('card_component'))).toBeVisible();
      
    await element(by.id('card_component')).tap();
      
    // await expect(element(by.text('Welcome'))).toBeVisible();
    await expect(element(by.id('card_component'))).toNotExist();
  });
  
});

