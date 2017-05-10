import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class FlexBoxLayout extends Component{
    render() {
        return (
            // Try setting `justifyContent` to `center`.
            // Try setting `flexDirection` to `row`.
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                //alignItems:'center'
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }

}