import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class ChatScreen extends Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };
    render() {
        const { params } = this.props.navigation.state;
        return (
            <View style={styles.container}>
                <Text>Chat with {params.user}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        flexDirection:'column'
    }
});