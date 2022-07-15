

/*藏品列表*/
import React, {Component} from 'react';
import { View, FlatList, Text, StyleSheet,ActivityIndicator} from 'react-native'
import axios from 'axios';

class CollectionList extends Component {
    constructor(props){
        super(props)
        this.state = {
            pageNum:1,
            pageSize:10,
            totalNum:0,
            isLoading:false,
            dataArr:[],
            isMoreData:0,
        }
        //数据初始化
        this.init();
    }

    init(){
        axios.get("http://localhost:8080/nft/page?current=1&size=10").then(
            response=>{
                const resp = response.data;
                if (resp.code === '200'){
                    let dataArr = this.state.dataArr;
                    this.setState({
                        /*TODO*/
                        dataArr:dataArr.concat(resp.data.records),
                        pageNum:resp.data.current,
                        pageSize:resp.data.size,
                        totalNum:resp.data.pages
                    })
                }

                alert(this.state.dataArr);
                alert(this.state.pageNum);
                alert(this.state.pageSize);
                alert(this.state.totalNum);
            })
    }

    genIndicator(){   //加载符号的制作
        if (this.state.isMoreData === 1){
            return(
                <View>
                    <ActivityIndicator
                        size="small"
                        animating={true}
                        color="#ccc"
                    />

                    <Text style={{ textAlign:"center", flex:1, marginBottom:10}}>正在加载数据...</Text>
                </View>
            )
        }else if (this.state.isMoreData === 2){
            return(
                <View>
                    <Text style={{ textAlign:"center", flex:1, marginBottom:10}}>我是有底线的</Text>
                </View>
            )
        }else {
            return null
        }

    }


    /*渲染数据*/
    renderData({item}){
        return(
            <View>
                <Text>{item}</Text>
            </View>
        )
    }

    /*下拉刷新*/
    loadRefreshData(){
        //1、修改 isLoading的值为true
        this.setState({
            isLoading:true
        })

        //2、异步请求
        let newData = [7,8,9];
        this.setState({
            dataArr:newData,
            isLoading:false,

        })

    }


    /*上拉加载*/
    loadMoreData(){
        this.setState({
            isLoading:true
        })

        //加载数据
        let appendDate = [];
        //如果有数据就追加。没有数据就显示
        if (appendDate.length === 0){
            this.setState({
                isMoreData:2,
                isLoading:false
            })
        }else{
            let newData = this.state.dataArr.concat(appendDate)
            this.setState({
                dataArr:newData,
                isLoading:false,
                isMoreData:1
            })
        }


    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'red'}}>
                <FlatList
                    data = {this.state.dataArr}
                    renderItem = {this.renderData}
                    refreshing = {this.state.isLoading}  //设置是否正在加载数据
                    onRefresh = {this.loadRefreshData.bind(this)} //设置刷新的时候，执行的代码
                    ListFooterComponent = {this.genIndicator.bind(this)}   //确定加载的符号
                    onEndReached = {this.loadMoreData.bind(this)}
                    ListEmptyComponent = {
                        ()=>{
                            return <View><Text style={{ textAlign:"center", flex:1, marginBottom:10}}>暂无数据</Text></View>
                        }
                    }
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

})

export default CollectionList;
