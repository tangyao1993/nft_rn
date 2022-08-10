import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, FlatList, ScrollView, ActivityIndicator} from "react-native";
import Swiper from 'react-native-swiper'
import axios from "axios";
import {Flex, WingBlank} from "@ant-design/react-native";

const styles = StyleSheet.create({

})

class Detail extends Component {

    constructor(props: any) {
        super(props)
        this.state = {
            id:props.id
        }
    }

    render() {
        return (
            <View>
                <Text>{this.state.id}</Text>
            </View>
        );
    }
}

export default Detail;
