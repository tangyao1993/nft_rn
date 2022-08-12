/* 我的tab */
import React from 'react';
import {Image, Text, View} from 'react-native';
import {Flex, Tabs, WingBlank} from '@ant-design/react-native';
import CollectionList from "./CollectionList";
import SoldList from "./SoldList";


export default class My extends React.Component<any, any> {

    render() {
        const tabs = [
            {title: '藏品'},
            {title: '已卖出'},
        ]
        const style = {
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
            backgroundColor: '#fff',
        }
        return (

            <View>
                <WingBlank style={{marginBottom: 5, marginTop: 5}}>
                    <Flex direction="row" style={{height: 100}}>
                        <Flex.Item style={{flex: 1}}>
                            <Image style={{width: 100, height: 100, borderRadius: 50}}
                                   source={require("../resource/morentouxiang.jpeg")}/>
                        </Flex.Item>
                        <Flex.Item style={{flex: 3}}>
                            <Flex direction="column" style={{flex: 1}}>
                                <Flex.Item>
                                    <Text style={{marginTop: 30, fontSize: 18}}>用户名:CCCCCCCCCCCCCCC</Text>
                                    <Text>钱包地址:0x1231231CCCCC</Text>
                                </Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                </WingBlank>

                <Tabs tabs={tabs}>
                    <CollectionList/>
                    <SoldList/>
                </Tabs>

            </View>

        )
    }
}

export const title = 'Tabs'
export const description = 'Tabs example'
