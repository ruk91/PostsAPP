/**
 * @format
 */

import 'react-native';
import React from 'react';
import { expect as chaiExpect } from 'chai';
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
    chaiExpect(wrapper.find(ScrollView)).to.have.lengthOf(1);
  });

  it('renders one <View /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    chaiExpect(wrapper.find(View)).to.have.lengthOf(5);
  });

  it('renders one <Text /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    chaiExpect(wrapper.find(Text)).to.have.lengthOf(2);
  });

  it('renders one <Image /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    chaiExpect(wrapper.find(Image)).to.have.lengthOf(1);
  });

  it('renders one <FlatList /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    chaiExpect(wrapper.find(FlatList)).to.have.lengthOf(1);
  });

  it('renders one <TouchableOpacity /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    chaiExpect(wrapper.find(TouchableOpacity)).to.have.lengthOf(1);
  });

  it('renders one <ActivityIndicator /> components', () => {
    const wrapper = shallow(<ProfileScreen />);
    chaiExpect(wrapper.find(ActivityIndicator)).to.have.lengthOf(1);
  });

  it('simulates click events', () => {
    const onPress = sinon.spy();
    const wrapper = shallow(<TouchableOpacity onPress={this._onPressImage()} />);
    wrapper.find('button').simulate('click');
    chaiExpect(this._onPressImage()).to.have.property('callCount', 1);
  });
});

describe('Styling in <ProfileScreen/>', () => {

  it('renders ProfileScreen.container styles correctly', () => {
      const tree = renderer.create(
          <ProfileScreen>
              <ProfileScreen.container 
                  flex={1}
              />
          </ProfileScreen>
      ).toJSON();
      expect(tree).toMatchSnapshot();
  });

  it('renders ProfileScreen.photosContainer styles correctly', () => {
      const tree = renderer.create(
          <ProfileScreen>
              <ProfileScreen.photosContainer 
                  flexDirection= 'row'
                  flexWrap= 'wrap'
                  height= 'auto'
              />
          </ProfileScreen>
      ).toJSON();
      expect(tree).toMatchSnapshot();
  });

  it('renders ProfileScreen.photosCard styles correctly', () => {
      const tree = renderer.create(
          <ProfileScreen>
              <ProfileScreen.photosCard 
                  marginTop={10}
                  justifyContent= 'center'
                  margin= {(window.width)*0.03}
              />
          </ProfileScreen>
      ).toJSON();
      expect(tree).toMatchSnapshot();
  });

  it('renders ProfileScreen.cardTittle styles correctly', () => {
    const tree = renderer.create(
        <ProfileScreen>
            <ProfileScreen.cardTittle 
                color="#000"
                fontFamily= 'Nunito-Black'
                fontSize= {22}
                marginBottom= {5}
            />
        </ProfileScreen>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});

});