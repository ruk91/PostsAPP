import React, {Fragment} from 'react';
import { Button, View, Text, ActivityIndicator } from 'react-native';

class ProfileScreen extends React.Component {
    static navigationOptions = {
      title: 'Title goes here'
    };

    constructor() {
        super();
        // const ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});  
        this.state = {
            loading: true,
            title: 'Title goes here'
        }
    }

    componentDidMount () {
        this._setParamsToState();
    }

    _setParamsToState = () => {
        this.setState({
            loading: false,
            // title: this.props.getParam('title')
        })
    }

    render() {
        const { loading } = this.state; 
        const { navigation } = this.props;
        const id = navigation.getParam('id', 'NO-ID');
        const title = navigation.getParam('title', 'some default value');
        const body = navigation.getParam('body', 'some default value');

        if (!loading) {
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
        } else {
            return (
                <ActivityIndicator/>
            )
        }
    }
}
export default ProfileScreen;