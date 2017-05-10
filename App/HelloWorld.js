import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

export default class HelloWorldComp extends Component{


    render(){
        return(
            <View style={styles.container}>
                <Text>Hello World</Text>
            </View>
        )
    }
}

// style样式，样式的名称和值通常和CSS类似，除了在命名方式上使用驼峰标识(background-color -> backgroundColor)
// width
//https://my.oschina.net/u/566587/blog/526884
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // width:100, 固定高度，react native中所有的尺寸都是无单位的，并且表示密度无关的像素。 安卓上为100dp，ios上为100pt
        // height:100
    }
});