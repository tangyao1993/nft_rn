
/*已卖出列表*/
import React, {Component} from 'react';
import { View, FlatList, Text, StyleSheet} from 'react-native'

class SoldList extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoading:false,
            dataArr:[1,2,3,4]

        }
    }


    renderData({item}){
        return(
            <View>
                <Text>{item}</Text>
            </View>
        )
    }

    loadData(){
        //1、修改 isLoading的值为true
        this.setState({
            isLoading:true
        })

        //2、异步请求
        let newData = [7,8,9];
        this.setState({
            dataArr:newData,
            isLoading:false
        })

    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'blue'}}>
                <FlatList
                    data = {this.state.dataArr}
                    renderItem = {this.renderData}
                    refreshing = {this.state.isLoading}  //设置是否正在加载数据
                    onRefresh = {this.loadData.bind(this)} //设置刷新的时候，执行的代码
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

})


export default SoldList;
