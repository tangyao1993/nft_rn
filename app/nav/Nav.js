import React from 'react'
import {Text, View} from 'react-native'
import {Icon, SearchBar, TabBar} from '@ant-design/react-native'
import Market from "../market/Market";
import My from "../my/My"

export default class Nav extends React.Component<any, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            selectedTab: 'market',
        }
    }

    renderContent() {
        return (
            <View style={{flex: 1, alignItems: 'center', backgroundColor: 'white'}}>
                <SearchBar placeholder='搜索关键词' showCancelButton/>
                {
                    this.state.selectedTab === 'market'? <Market/>:<My/>
                }
            </View>
        )
    }

    onChangeTab(tabName: any) {
        this.setState({
            selectedTab: tabName,
        })
    }

    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#f5f5f5">
                <TabBar.Item
                    title="市场"
                    icon={<Icon name="shopping-cart"/>}
                    selected={this.state.selectedTab === 'market'}
                    onPress={() => this.onChangeTab('market')}>

                    {this.renderContent()}


                </TabBar.Item>
                <TabBar.Item
                    icon={<Icon name="smile"/>}
                    title="我的"
                    selected={this.state.selectedTab === 'my'}
                    onPress={() => this.onChangeTab('my')}>

                    {this.renderContent()}

                </TabBar.Item>
            </TabBar>
        )
    }
}
