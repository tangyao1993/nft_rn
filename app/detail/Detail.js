import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Flex} from "@ant-design/react-native";
import {Actions} from "react-native-router-flux";


const styles = StyleSheet.create({
    rootView: {
        // backgroundColor: '#e84848',
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap'
    },
    baseTextStyle: {
        backgroundColor: '#9f9fec',
        fontSize: 15,
        textAlign: 'left',
        marginTop: 3,
    },
    bottomButtons: {
        alignItems:'center',
        justifyContent: 'center',
        flex:1,
        backgroundColor:'black',
        height:70,
    },
    footer: {
        position: 'absolute',
        flex:0.1,
        left: 0,
        right: 0,
        bottom: -10,
        backgroundColor: '#FFF',
        flexDirection:'row',
        height:70,
        alignItems:'center',
        borderRadius: 20,
    },
})


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id
        }
    }


    componentDidMount() {
        //根据id获取详情

    }

    render() {
        return (
            (
                <Flex>
                    <ScrollView>
                        <View style={styles.rootView}>
                            <View>
                                <Image
                                    style={{
                                        width: '105%',
                                        height: 300,
                                    }}
                                    source={require("../resource/img.png")}
                                />
                            </View>

                            <View style={{marginTop:15}}>
                                <Text style={{fontSize: 14, color: "#000000"}}>官方认证</Text>
                                <Text style={{
                                    fontWeight: "bold",
                                    lineHeight: 24,
                                    fontSize: 24,
                                    color: "#000000",
                                    paddingTop:15
                                }}>皇帝的需要#202</Text>
                                <View style={{marginTop: 15}}>
                                    <Text style={{fontWeight: "bold", fontSize: 24, color: "#000"}}>所属专辑</Text>
                                    <View style={{flexDirection: "row", marginTop: 15}}>
                                        <Text style={{fontSize: 16, color: "#262426"}}>专辑名称 </Text>
                                        <Text style={{fontWeight: "bold", fontSize: 16, paddingLeft: 10, color: "#262426"}}>大千世界
                                        </Text>
                                        <Text style={{fontSize: 16, paddingLeft: 90, color: "#262426"}}>全部编号</Text>
                                    </View>


                                    <View>
                                        <View style={{flexDirection: "row", marginTop: 15,}}>

                                            <Text style={{lineHeight: 24, paddingRight: 40}}>
                                                <Text style={{backgroundColor: "#ccc"}}>发行</Text>
                                                <Text
                                                    style={{backgroundColor: "#89e725", paddingLeft: 20}}>100份</Text></Text>
                                            <Text style={{lineHeight: 24, paddingRight: 40}}>
                                                <Text style={{backgroundColor: "#ccc"}}>流通</Text>
                                                <Text
                                                    style={{backgroundColor: "#89e725", paddingLeft: 20}}>100份</Text></Text>
                                        </View>
                                    </View>


                                    <View style={{marginTop: 15}}>
                                        <View>
                                            <View>
                                                <Text style={{fontWeight: "bold", fontSize: 24, color: "#000"}}>作者信息</Text>
                                                <View style={{flexDirection: "row", paddingLeft: 4,marginTop:10}}>
                                                    <Image
                                                        style={{width: 50, height: 50, borderRadius: 60}}
                                                        source={require("../resource/img.png")}
                                                    />
                                                    <View style={{paddingLeft: 15,paddingTop:10}}>
                                                        <Text>张三</Text>
                                                        <Text>0x00000000</Text>
                                                    </View>
                                                    <View style={{paddingLeft: 30,paddingTop:10}}>
                                                        <Text>主页</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <Text style={{
                                                paddingTop: 6,
                                                paddingLeft: 5
                                            }}>
                                                文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容
                                                文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内
                                                容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容
                                                文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容
                                                文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容
                                            </Text>
                                        </View>
                                    </View>

                                    <View style={{marginTop: 5}}>
                                        <Text style={{
                                            paddingTop: 6,
                                            paddingLeft: 5, fontWeight: "bold", fontSize: 24, color: "#000"
                                        }}>关于数字藏品</Text>
                                        <Text style={{
                                            paddingTop: 6,
                                            paddingLeft: 5
                                        }}>
                                            数字藏品可以通俗理解为区块链凭证。通常是指开发者在以太坊平台上根据ERC721标准/协议所发行，特性为不可分割、不可替代、独一无二。数字藏品常见于文化艺术品领域、知识产权的链上发行、流转、确权等作用，能有效保护链上知识产权，防止篡改、造假等，是区块链技术的一类场景应用。
                                        </Text>

                                    </View>
                                </View>

                            </View>

                        </View>
                        <View style={{height:80}}>


                        </View>
                    </ScrollView>



                    <View style={styles.footer}>
                        <Text style={{width:150,color:"#000",fontSize:20,textAlign: 'center',paddingBottom:25,paddingLeft:20}}>
                            $100
                        </Text>
                        <TouchableOpacity  style={styles.bottomButtons} onPress={() => {
                            Actions.payDetail();
                        }}>
                            <View style={{flexDirection:"row"}}>

                                <Text style={{
                                    fontSize: 20,
                                    color: '#FFF',
                                    textAlign: 'center',
                                    paddingBottom:25,

                                }}>
                                    立即购买
                                </Text>

                            </View>


                        </TouchableOpacity>
                    </View>

                </Flex>


            )

        )
    }
}

export default Detail;
