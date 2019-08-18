import React, {Fragment} from 'react';
import {
  View,
  Image
} from 'react-native';
import PropTypes from 'prop-types';

// import CustomTextInputStyle from './CustomTextInputStyle';

class CustomImage extends React.Component {


    static propTypes = {
        containerStyle: PropTypes.style,
        style: PropTypes.style,
        autoFocus: PropTypes.bool,
        editbale: PropTypes.bool,
        textColor: PropTypes.string,
        onChangeText: PropTypes.func,
        value: PropTypes.string,
        placeholder: PropTypes.string,
      }

  render() {
      return(
        <View style={[this.props.containerStyle, CustomTextInputStyle.mainBlock]}>
          <TextField
            textColor={Colors.brandText}
            style={[CustomTextInputStyle.textInputAndroid,this.props.style ]}
            labelFontSize={12}
            value={this.props.value}
            editable={this.props.editable}
            activeLineWidth={1}
            autoCapitalize={false}
            labelTextStyle={{fontFamily: 'Roboto-Regular'}}
            tintColor={Colors.brandSecondaryText}
            onChangeText={this.props.onChangeText}
            renderAccessory={this.renderIcon.bind(this)}
            label={this.props.placeHolder}
            placeholderTextColor={Colors.placeHolderText}
            autoFocus={this.props.autoFocus} />
        </View>
        // <View style={styles.container}>
        //     <Image style={styles.photo} source={{uri: url}} />
        // </View>
      )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    photo:{
        marginTop: (window.width)* 0.05,
        alignSelf: 'center',
        width:(window.width)*.9,
        height:(window.width)*.9,
        margin:(window.width)*.005,
        // marginRight:5,
    },
})

export default CustomImage;