import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

 class MyComponent extends Component {
     constructor(props) {
         super(props)
         this.state = {
             counter: 0
         }
         setInterval(() => {
             this.setState({counter:this.state.counter + 1});
         }, 1000);

     }

     render() {
             return (
                 <View>
                     <Text>Name is:{this.props.name}, I start count {this.state.counter}</Text>
                 </View>
             )
     }
 }

export default class UseMyComponent extends Component{

    render(){
        return(
            <View style={styles.container}>
                <MyComponent name='张三'/>
                <MyComponent name='李四'/>
                <MyComponent name='王五'/>
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