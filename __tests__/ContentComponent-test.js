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
import ContentComponent from '../app/components/ContentComponent';

configure({adapter: new Adapter()});

describe('<ContentComponent />', () => {

    it('should render the ContentComponent Component', () => {
        const wrapper = shallow(<ContentComponent />);
        chaiExpect(wrapper.find(ContentComponent)).to.have.lengthOf(1);
    });

    it('renders one <View /> components', () => {
        const wrapper = shallow(<ContentComponent />);
        chaiExpect(wrapper.find(View)).to.have.lengthOf(1);
    });

    it('renders one <Text /> components', () => {
        const wrapper = shallow(<ContentComponent />);
        chaiExpect(wrapper.find(Text)).to.have.lengthOf(1);
    });

});

describe('Styling in <ContentComponent/>', () => {

    it('renders ContentComponent.postContent styles correctly', () => {
        const tree = renderer.create(
            <ContentComponent>
                <ContentComponent.postContent 
                    flex= {1}
                    padding= {30}
                />
            </ContentComponent>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });


    it('renders ContentComponent.postTitle styles correctly', () => {
        const tree = renderer.create(
            <ContentComponent>
                <ContentComponent.postTitle 
                    fontSize= {26}
                    fontFamily= 'Nunito-Regular'
                    fontWeight = '600'
                />
            </ContentComponent>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});