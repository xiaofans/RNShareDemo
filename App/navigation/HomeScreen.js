import React,{Component} from 'react'
import {
    AppRegistry,
    Text,
    TouchableOpacity,
    StyleSheet,
    View
} from 'react-native';

export default class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state={
            callbackValue:''
        }
    }
    static navigationOptions = {
        title: 'Welcome',
    };
    //  <TouchableOpacity  onPress={()=>navigate('Chat',{user:'xiaofan'})}>
    //   <TouchableOpacity  onPress={()=>navigate('Chat',{user:this._callback})}>
    render() {
       // console.log('render home screen...')
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                 <TouchableOpacity  onPress={()=>navigate('Chat',{user:'xiaofan'})}>
                     <Text>Hello, Navigation!</Text>
                </TouchableOpacity>

            </View>
        )
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
