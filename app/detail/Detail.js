import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imgCss:{
        width:'100%',
        height:'50%'
    },
})

class Detail extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:props.id
        }
    }

    componentDidMount() {
        //根据id获取详情

    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.imgCss} source={require("../resource/img.png")}/>
                <Text>id:{this.state.id}</Text>
                <Text>名称</Text>
                <Text>发行数量:100</Text>
                <Text>流通数量:100</Text>
                <Text>合约地址</Text>
                <Text>链上标识</Text>
                <Text>创作者</Text>
                <Text>拥有者</Text>
            </View>

        );
    }
}

export default Detail;
