/* tslint:disable:no-console */
import React from 'react'
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native'
import {Flex, Tabs, WingBlank} from '@ant-design/react-native'
const renderContent = (tab: any, index: any) => {
    const style = {
        paddingVertical: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#ddd',
    }
    const content = [1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        return (
            <View key={`${index}_${i}`} style={style}>
                <Text>
                    {tab.title} - {i}
                </Text>
            </View>
        )
    })
    return (
        <ScrollView key={index} style={{ backgroundColor: '#fff' }}>
            {content}
        </ScrollView>
    )
}

export default class My extends React.Component<any, any> {
    render() {
        const tabs = [
            { title: '藏品' },
            { title: '已卖出' },
        ]
        const style = {
            alignItems: 'center',
            justifyContent: 'center',
            height: 150,
            backgroundColor: '#fff',
        }
        return (
            <View>
                <WingBlank style={{ marginBottom: 5, backgroundColor:'gray'}}>
                    <Flex direction="row" style={{height:200    }}>
                        <Flex.Item style={{backgroundColor:'blue'}}>
                            <Image style={{width:100,height:100,borderRadius:50}} source={require("../resource/d.jpeg")}/>
                        </Flex.Item>
                        <Flex.Item style={{backgroundColor:'green'}}>
                            <Flex direction="column" style={{flex:1}}>
                                <Flex.Item style={{backgroundColor:'red'}}>
                                    <Text>用户名:ccccc</Text>
                                </Flex.Item>
                                <Flex.Item style={{backgroundColor:'black'}}>
                                    <Text>钱包地址0x1231231</Text>
                                </Flex.Item>
                            </Flex>
                        </Flex.Item>
                    </Flex>
                </WingBlank>
                <Tabs tabs={tabs}>
                    <View style={style}>
                        <Text>藏品内容</Text>
                    </View>
                    <View style={style}>
                        <Text>已卖出内容</Text>
                    </View>
                </Tabs>
            </View>
        )
    }
}

export const title = 'Tabs'
export const description = 'Tabs example'
