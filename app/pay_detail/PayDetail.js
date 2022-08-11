import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Flex} from "@ant-design/react-native";


const styles = StyleSheet.create({
    rootView: {
        // backgroundColor: '#e84848',
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'wrap'
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
class PayDetail extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Flex>
                <ScrollView>
                    {/*<View style={styles.rootView}>*/}
                        <View style={{flex:1,height:100,marginTop:20,backgroundColor:'red'}}>
                            <Text>
                                存储地址
                            </Text>
                            <Text style={{justifyContent:"flex-end",paddingLeft:200,color:'black'}}>

                                asdsadasdsa

                            </Text>

                        </View>
                        <View style={{flex:1,height:100,marginTop:20,backgroundColor:'blue'}}>
                            <Text>商品详情</Text>
                        </View>
                        <View style={{flex:1,height:100,marginTop:20,backgroundColor:'gray'}}>
                            <Text>应付金额</Text>
                        </View>
                        <View style={{flex:1,height:100,marginTop:20,backgroundColor:'red'}}>
                            <Text>
                                服务须知
                            </Text>
                        </View>
                    {/*</View>*/}
                </ScrollView>
                <View style={styles.footer}>
                    <Text style={{width:150,color:"#000",fontSize:20,textAlign: 'center',paddingBottom:25,paddingLeft:20}}>
                        $100
                    </Text>
                    <TouchableOpacity  style={styles.bottomButtons} onPress={() => {
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
    }
}

export default PayDetail;
