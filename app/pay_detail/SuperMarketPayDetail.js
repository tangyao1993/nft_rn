import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, TouchableOpacity, View, Dimensions, Image} from "react-native";
import {Flex} from "@ant-design/react-native";
import axios from "axios";


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


const {width, height, scale} = Dimensions.get('window');


class SuperMarketPayDetail extends Component {

    constructor(props) {
        super(props);
        this.state={
            bigName:props.bigName,
            url:props.url,
            authorAdd:props.authorAdd,
            price:props.price,
            mangerId:props.mangerId
        }
    }


    /**
     * 扣款接口，抢购接口
     */
    panicBuying = () =>{
        //根据id获取详情
        axios.post("/super/market/buy",{mangerId:this.state.mangerId}).then(
            response=>{
                const resp = response.data;
                console.log(resp)
                if (resp.code === 200){

                }else{
                    console.log(resp.msg);
                }

            }).catch(error => {
            console.log(error);
        })
    }


    render() {
        return (
            <Flex>
                <View style={styles.rootView}>

                    <View style={{paddingTop: 10, backgroundColor: "#fff"}}>
                        <View style={{flexDirection: "row", marginTop: 4,}}>

                            <View style={{height: 30, flex: 1}}>
                                <Text style={{fontSize:20,lineHeight:20}}>存储地址</Text>
                            </View>
                            <View style={{height: 20, width: 174,}}>
                                <Text style={{fontSize:20,lineHeight:20}}>{this.state.authorAdd}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop:10,marginLeft:10,marginRight:10,marginBottom:10, height: 30 , width: width}}>
                            <Text>该钱包账户由平台代理创建，帮助您存储数字藏品，完成链上寄售。未经您的允许，平台不会干预该账户的任何信息</Text>
                        </View>
                    </View>

                    <View style={{paddingTop: 15,}}>
                        <View>
                            <Text style={{fontWeight: "bold", lineHeight: 20, fontSize: 20, color: "#000000"}}>商品详情</Text>
                            <View>
                                <View style={{flexDirection: "row", paddingLeft: 4,marginTop:10}}>
                                    <Image
                                        style={{width: 50, height: 50, borderRadius: 0}}
                                        source={{uri:this.state.url}}
                                    />
                                    <View style={{paddingLeft: 15}}>
                                        <Text>作品名称</Text>
                                        <Text>{this.state.bigName}</Text>
                                    </View>

                                </View>
                            </View></View>

                    </View>


                    <View style={{paddingTop: 10}}>
                        <View style={{ marginTop: 4,height:40}}>
                            <View style={{flexDirection: "row",marginTop:10}}>
                                <View style={{height: 20, flex: 1}}>
                                    <Text style={{lineHeight: 20, fontSize: 20}}>应付金额</Text>
                                </View>
                                <View style={{  height: 20, width: 100,}}>
                                    <Text>￥{this.state.price}</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{paddingTop: 10}}>
                        <View style={{ marginTop: 4,height:80}}>
                            <View style={{height: 20, flex: 1,marginTop:10}}>
                                <Text style={{lineHeight: 20, fontSize: 20}}>服务须知</Text>
                            </View>
                            <View style={{height: 20, flex: 1,marginTop:10}}>
                                {/*todo: 按钮*/}
                                <Text style={{lineHeight: 18, fontSize: 18}}>我已同意xxxxx</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{height:700}}>


                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={{width:150,color:"#000",fontSize:20,textAlign: 'center',paddingBottom:25,paddingLeft:20}}>
                        $100
                    </Text>
                    <TouchableOpacity  style={styles.bottomButtons} onPress={() => {
                        this.panicBuying();

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

export default SuperMarketPayDetail;
