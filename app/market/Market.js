import React, {Component} from 'react';
import {ActivityIndicator, Dimensions, FlatList, Image, StyleSheet, Text, TouchableHighlight, View} from "react-native";
import Swiper from 'react-native-swiper'
import axios from "axios";
import {Flex, WingBlank} from "@ant-design/react-native";
import {Actions} from "react-native-router-flux";
import SuperMarketDetail from "../detail/SuperMarketDetail";

const {width, height, scale} = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {flex: 1},
    mainImgCss: {
        width: width,
        height: 400
    },
    imgCss: {
        width: 150,
        height: 150
    },
    wingBlankCss: {
        marginTop: 40,
        marginBottom: 5,
        marginLeft: 30
    },
    swiperCss: {
        height: 400,
    },


    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    image: {
        flex: 1
    },
    paginationStyle: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    paginationText: {
        color: 'white',
        fontSize: 20
    }
})


class Market extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pics: [],
            picPageNum: 1,
            picPageSize: 5,
            pageNum: 1,
            pageSize: 10,
            totalPage: 0,
            isLoading: false,
            dataArr: [],
        }
        this.getPics();
        this.getData();
    }

    getPics = () => {
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
        axios.get("/market/group", {params: {current: this.state.pageNum, size: this.state.pageSize}}).then(
            response => {
                const resp = response.data;

                //console.log(resp);
                if (resp.code === 200) {
                    this.setState({
                        dataArr: this.state.dataArr.concat(resp.data.records),
                        totalPage: resp.data.pages
                    })
                }

            }).catch(error => {
            console.log(error);
        })
    }

    /*上拉加载*/
    loadMoreData = () => {
        if (this.state.pageNum + 1 > this.state.totalPage) {
            return;
        }

        this.setState({
            pageNum: this.state.pageNum + 1,
            pageSize: this.state.pageSize,
        }, () => {
            this.getData();
        })
    }

    /*下拉刷新*/
    loadRefreshData = () => {
        //1、修改 isLoading的值为true
        this.setState({
            isLoading: true
        })

        //2、异步请求
        //清理array
        this.setState({
            dataArr: [],
            pageNum: 1,
            pageSize: this.state.pageSize,
        }, () => {
            //获取初始化数据
            this.getPics();
            this.getData();
        })
        this.setState({
            isLoading: false,
        })
    }

    /*渲染数据*/
    renderData({item}) {
        return (
            <TouchableHighlight underlayColor="white" onPress={()=>{
                Actions.marketDetail({marketId:item.id});
            }} >
                <WingBlank style={styles.wingBlankCss}>
                    <Flex direction={"column"}>
                        <Flex.Item>
                            <Image style={styles.imgCss} source={{url: item.url}}/>
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
            </TouchableHighlight>
        )
    }


    renderSwiper = () => {

        // 解决轮播图插件自身bug，底部dot不会跟着动
        if (!this.state.pics || this.state.pics.length === 0) {
            return null;
        }

        return (
            <Swiper
                style={styles.swiperCss}
                loop={true} //如果设置为false，那么滑动到最后一张时，再次滑动将不会滑到第一张图片。
                autoplay={true} //自动轮播
                autoplayTimeout={5} //每隔4秒切换
                horizontal={true} //水平方向，为false可设置为竖直方向
                showsButtons={false} //为false时不显示控制按钮
                showsPagination={true} //为false不显示下方圆点

                dot={
                    <View
                        style={{
                            backgroundColor: 'rgba(0,0,0,.2)',
                            width: 5,
                            height: 5,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />
                }
                activeDot={
                    <View
                        style={{
                            backgroundColor: '#000',
                            width: 8,
                            height: 8,
                            borderRadius: 4,
                            marginLeft: 3,
                            marginRight: 3,
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />
                }
                paginationStyle={{
                    bottom: -23,
                    left: null,
                    right: 10
                }}
            >

                {
                    this.state.pics.map((item, index) => {
                        return (

                                <View key={index}
                                      style={styles.slide}
                                      title={
                                          <Text numberOfLines={1}>{item.name}</Text>
                                      }
                                >
                                    <TouchableHighlight underlayColor="white" onPress={()=>{
                                        Actions.superMarketDetail({storageId:item.storageId});
                                    }} >
                                    <Image
                                        resizeMode="stretch"
                                        style={styles.mainImgCss}
                                        source={{url: item.url}}
                                    />
                                    </TouchableHighlight>
                                </View>


                        )
                    })
                }
            </Swiper>


        )

    }

    render() {
        if (this.state.isLoading) {
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
                numColumns={2}
                data={this.state.dataArr}
                keyExtractor={(item, i) => i}
                renderItem={this.renderData}
                onEndReached={this.loadMoreData}
                onEndReachedThreshold={0.5}
                refreshing={this.state.isLoading}  //设置是否正在加载数据
                onRefresh={this.loadRefreshData} //设置刷新的时候，执行的代码
            />

        )
    }
}

export default Market;
