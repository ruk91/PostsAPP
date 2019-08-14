import React, {Fragment} from 'react';
import { Button, View, Text } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'NO-ID');
        const title = navigation.getParam('title', 'some default value');
        const body = navigation.getParam('body', 'some default value');
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>id: {JSON.stringify(id)}</Text>
        <Text>title: {JSON.stringify(title)}</Text>
        <Text>body: {JSON.stringify(body)}</Text>
        {/* <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100),
            })}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        /> */}
      </View>
      );
    }
}
export default ProfileScreen;