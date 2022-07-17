import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, FlatList, ScrollView, ActivityIndicator} from "react-native";
import Swiper from 'react-native-swiper'
import axios from "axios";
import {Flex, WingBlank} from "@ant-design/react-native";

const styles = StyleSheet.create({
    wrapper: {flex:1},
    mainImgCss:{
        width:420,
        height:200
    },
    imgCss:{
        width:150,
        height:150
    },
    wingBlankCss:{
        marginTop: 5,
        marginBottom: 5,
        marginLeft:30
    },
    swiperCss:{
        height:200
    }
})


class Market extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pics: [],
            picPageNum:1,
            picPageSize:5,
            pageNum:1,
            pageSize:10,
            totalPage:0,
            isLoading:false,
            dataArr:[],
        }
        this.getPics();
        this.getData();
    }

    getPics = () => {
        console.log("getPics")
        axios.get("/super/market/list", {params: {current: this.state.picPageNum, size: this.state.picPageSize}}).then(
            response => {
                const resp = response.data;

                if (resp.code === 200) {
                    this.setState({
                        pics: resp.data.records,
                    })
                }

            }).catch(error => {
            console.log(error);
        })

    }

    getData = () => {
        console.log("getData")
        axios.get("/market/group",{params:{current:this.state.pageNum,size:this.state.pageSize}}).then(
            response=>{
                const resp = response.data;

                //console.log(resp);
                if (resp.code === 200){
                    this.setState({
                        dataArr:this.state.dataArr.concat(resp.data.records),
                        totalPage:resp.data.pages
                    })
                }

            }).catch(error => {
            console.log(error);
        })
    }

    /*上拉加载*/
    loadMoreData = () =>{
        if (this.state.pageNum +1 >this.state.totalPage){
            return;
        }

        this.setState({
            pageNum:this.state.pageNum + 1,
            pageSize:this.state.pageSize,
        },()=>{
            this.getData();
        })
    }

    /*下拉刷新*/
    loadRefreshData = () => {
        //1、修改 isLoading的值为true
        this.setState({
            isLoading:true
        })

        //2、异步请求
        //清理array
        this.setState({
            dataArr:[],
            pageNum:1,
            pageSize:this.state.pageSize,
        },()=>{
            //获取初始化数据
            this.getPics();
            this.getData();
        })
        this.setState({
            isLoading:false,
        })
    }

    /*渲染数据*/
    renderData({item}){
        return(
            <WingBlank style={styles.wingBlankCss}>
                <Flex direction={"column"}>
                    <Flex.Item>
                        <Image style={styles.imgCss} source={require("../resource/img.png")}/>
                    </Flex.Item>
                    <Flex.Item>
                        <Text>名称:{item.name}</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <Text>作者:{item.genUserName}</Text>
                    </Flex.Item>
                    <Flex.Item>
                        <Text>价格:{item.price}</Text>
                    </Flex.Item>
                </Flex>
            </WingBlank>
        )
    }

    renderSwiper = () =>{
        return <Swiper style={styles.swiperCss}>
            {
                this.state.pics.map((item,i)=>{
                    return(
                        <View>
                            <Image style={styles.mainImgCss} source={require("../resource/img.png")}/>
                        </View>
                    )
                })
            }
        </Swiper>
    }

    render() {
        if (this.state.isLoading){
            return (
                <ActivityIndicator
                    size="small"
                    animating={true}
                    color="#ccc"
                />
            )
        }
        return (
            <FlatList
                ListHeaderComponent={this.renderSwiper}
                numColumns ={2}
                data = {this.state.dataArr}
                keyExtractor={(item,i)=>i}
                renderItem = {this.renderData}
                onEndReached = {this.loadMoreData}
                onEndReachedThreshold={0.5}
                refreshing = {this.state.isLoading}  //设置是否正在加载数据
                onRefresh = {this.loadRefreshData} //设置刷新的时候，执行的代码
            />

        )
    }
}

export default Market;
