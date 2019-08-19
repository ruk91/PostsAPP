import React, {Fragment} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet
} from 'react-native';
// import { expect } from 'chai';
import { expect as chaiExpect } from 'chai'
import Enzyme from 'enzyme';
import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
const window = Dimensions.get('window');
import TitleComponent from '../app/components/TitleComponent';

configure({adapter: new Adapter()});

describe('<TitleComponent />', () => {

    it('should render the TitleComponent Component', () => {
        const wrapper = shallow(<TitleComponent />);
        chaiExpect(wrapper.find(TitleComponent)).to.have.lengthOf(1);
    });

    it('renders one <View /> components', () => {
        const wrapper = shallow(<TitleComponent />);
        chaiExpect(wrapper.find(View)).to.have.lengthOf(1);
    });

    it('renders one <Text /> components', () => {
        const wrapper = shallow(<TitleComponent />);
        chaiExpect(wrapper.find(Text)).to.have.lengthOf(1);
    });

});

describe('Styling in <TitleComponent/>', () => {

    it('renders TitleComponent.header styles correctly', () => {
        const tree = renderer.create(
            <TitleComponent>
                <TitleComponent.header 
                    flexDirection= 'row'
                    padding={30}
                    alignItems= 'center'
                    backgroundColor= "#00BFFF"
                />
            </TitleComponent>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });


    it('renders TitleComponent.headerTitle styles correctly', () => {
        const tree = renderer.create(
            <TitleComponent>
                <TitleComponent.headerTitle 
                    fontSize={30}
                    fontFamily= 'Nunito-Bold'
                    color="#000"
                    marginTop={5}
                />
            </TitleComponent>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});