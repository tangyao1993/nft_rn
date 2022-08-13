
/*已卖出列表*/
import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet, Image, ActivityIndicator, TouchableHighlight} from 'react-native'
import axios from "axios";
import {Flex, WingBlank} from "@ant-design/react-native";
import {Actions} from "react-native-router-flux";

class SoldList extends Component {
    constructor(props){
        super(props)
        this.state = {
            pageNum:1,
            pageSize:10,
            totalPage:0,
            isLoading:false,
            dataArr:[],
        }
        this.getData();
    }


    getData(){
        axios.get("/col/sold",{params:{current:this.state.pageNum,size:this.state.pageSize,userId:1}}).then(
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
            this.getData();
        })
        this.setState({
            isLoading:false,
        })
    }


    /*上拉加载*/
    loadMoreData = () =>{
        if (this.state.pageNum +1 >this.state.totalPage){
            return;
        }

        this.setState({
            isLoading:true,
            pageNum:this.state.pageNum + 1,
            pageSize:this.state.pageSize,
        },()=>{
            this.getData();
        })
        //如果有数据就追加。没有数据就显示
        this.setState({
            isLoading:false
        })

    }

    /*渲染数据*/
    renderData({item}){
        return(
            <TouchableHighlight underlayColor="white" onPress={()=>{
                Actions.detail({storageId:item.storageId});
            }} >
                <WingBlank style={styles.wingBlankCss}>
                    <Flex direction={"column"}>
                        <Flex.Item>
                            <Image style={styles.imgCss} source={{uri: item.url}}/>
                        </Flex.Item>
                        <Flex.Item>
                            <Text>名称:{item.managerName}</Text>
                        </Flex.Item>
                        <Flex.Item>
                            <Text>作者:{item.authorName}</Text>
                        </Flex.Item>
                        <Flex.Item>
                            <Text>价格:{item.price}</Text>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
            </TouchableHighlight>
        )
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
            <View style={styles.container}>
                <FlatList numColumns ={2}
                          data = {this.state.dataArr}
                          keyExtractor={(item,i)=>i}
                          renderItem = {this.renderData}
                          refreshing = {this.state.isLoading}  //设置是否正在加载数据
                          onRefresh = {this.loadRefreshData} //设置刷新的时候，执行的代码
                          onEndReached = {this.loadMoreData}
                          onEndReachedThreshold={0.5}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    imgCss:{
        width:150,
        height:150
    },
    wingBlankCss:{
        marginTop: '2%',
        marginBottom: '2%',
        marginLeft:'7%'
    }
})

export default SoldList;
