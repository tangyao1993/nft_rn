import React, {Component} from 'react';
import {Dimensions, Image, View} from "react-native";


const {width, height, scale} = Dimensions.get('window');
class Launcher extends Component {
    render() {
        return (
            <View>
                <Image style={{height:height,width:width}} source={require("../resource/loading.jpg")}/>
            </View>
        );
    }
}

export default Launcher;
