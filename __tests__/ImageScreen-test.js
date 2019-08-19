/**
 * @format
 */

import 'react-native';
import React from 'react';
import { expect as chaiExpect } from 'chai'
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
import ImageScreen from '../app/views/ImageScreen';
const window = Dimensions.get('window'); 

configure({adapter: new Adapter()});

describe('<ImageScreen />', () => {

  it('renders one <ScrollView /> components', () => {
    const wrapper = shallow(<ImageScreen />);
    chaiExpect(wrapper.find(ScrollView)).to.have.lengthOf(1);
  });

  it('renders one <View /> components', () => {
    const wrapper = shallow(<ImageScreen />);
    chaiExpect(wrapper.find(View)).to.have.lengthOf(2);
  });

  it('renders one <Text /> components', () => {
    const wrapper = shallow(<ImageScreen />);
    chaiExpect(wrapper.find(Text)).to.have.lengthOf(1);
  });

  it('renders one <Image /> components', () => {
    const wrapper = shallow(<ImageScreen />);
    chaiExpect(wrapper.find(Image)).to.have.lengthOf(1);
  });

  it('renders one <ActivityIndicator /> components', () => {
    const wrapper = shallow(<ImageScreen />);
    chaiExpect(wrapper.find(ActivityIndicator)).to.have.lengthOf(1);
  });

  // it('renders an `.icon-star`', () => {
  //   const wrapper = shallow(<ImageScreen />);
  //   expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
  // });

  // it('renders children when passed in', () => {
  //   const wrapper = shallow((
  //     <ImageScreen>
  //       <div className="unique" />
  //     </ImageScreen>
  //   ));
  //   expect(wrapper.contains(<div className="unique" />)).to.equal(true);
  // });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
  //   wrapper.find('button').simulate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});

describe('Styling in <ImageScreen/>', () => {

  it('renders ImageScreen.container styles correctly', () => {
      const tree = renderer.create(
          <ImageScreen>
              <ImageScreen.container 
                  flex={1}
                  justifyContent= 'center'
                  alignItems= 'center'
              />
          </ImageScreen>
      ).toJSON();
      expect(tree).toMatchSnapshot();
  });

  it('renders ImageScreen.photo styles correctly', () => {
      const tree = renderer.create(
          <ImageScreen>
              <ImageScreen.photo 
                  marginTop= {(window.width)* 0.05}
                  alignSelf= 'center'
                  width= {(window.width)*.9}
                  height= {(window.width)*.9}
                  margin= {(window.width)*.005}
              />
          </ImageScreen>
      ).toJSON();
      expect(tree).toMatchSnapshot();
  });

});
