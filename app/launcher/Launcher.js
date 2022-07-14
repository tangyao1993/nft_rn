import React, {Component} from 'react';
import {Image, View} from "react-native";

class Launcher extends Component {
    render() {
        return (
            <View>
                <Image source={require("../resource/a.jpeg")}/>
            </View>
        );
    }
}

export default Launcher;
