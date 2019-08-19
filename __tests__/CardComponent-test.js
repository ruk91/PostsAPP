import React, {Fragment} from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet
} from 'react-native';
import { expect as chaiExpect } from 'chai'
import Enzyme from 'enzyme';
import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
const window = Dimensions.get('window');
import CardComponent from '../app/components/CardComponent';

configure({adapter: new Adapter()});

describe('<CardComponent />', () => {
    const wrapper = shallow(<CardComponent />);

    it('should render the CardComponent Component', () => {
        const wrapper = shallow(<CardComponent />);
        chaiExpect(wrapper.find(CardComponent)).to.have.lengthOf(1);
    });

    it('renders one <TouchableOpacity /> components', () => {
        const wrapper = shallow(<CardComponent />);
        chaiExpect(wrapper.find(TouchableOpacity)).to.have.lengthOf(1);
    });

    it('renders one <View /> components', () => {
        const wrapper = shallow(<CardComponent />);
        chaiExpect(wrapper.find(View)).to.have.lengthOf(1);
    });

    it('renders one <Text /> components', () => {
        const wrapper = shallow(<CardComponent />);
        chaiExpect(wrapper.find(Text)).to.have.lengthOf(2);
    });

});

describe('Styling in <CardComponent/>', () => {

    it('renders CardComponent.postContainer styles correctly', () => {
        const tree = renderer.create(
            <CardComponent>
                <CardComponent.container 
                    alignItems='center' 
                    justifyContent='flex-start' 
                    backgroundColor='rgba(255,255,255,1)' 
                    margin={(window.width)*0.03 }
                    borderRadius={20}
                    flexDirection='row'
                    shadowColor= '#000'
                    // shadowOffset= { width= {0} {height= 4} }
                    shadowOpacity= {1}
                    // shadowRadius= { (2) (elevation= 6)}
                />
            </CardComponent>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders CardComponent.inputBox styles correctly', () => {
        const tree = renderer.create(
            <CardComponent>
                <CardComponent.postID 
                    color='#000' 
                    padding={(window.width*0.06)} 
                    fontFamily='Nunito-Regular'  
                    fontSize= {(window.width)*0.04}
                />
            </CardComponent>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders CardComponent.postTitle styles correctly', () => {
        const tree = renderer.create(
            <CardComponent>
                <CardComponent.postTitle 
                    flexShrink= {1}
                    color='#000' 
                    padding={(window.width*0.06)} 
                    fontFamily= 'Nunito-Regular' 
                    fontSize= {(window.width)*0.04}
                />
            </CardComponent>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

});