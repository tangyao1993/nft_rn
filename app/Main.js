import React, {Component} from 'react';
import {Router,Stack,Scene} from 'react-native-router-flux'
import App from "./App";
import CollectionListDetail from "./detail/CollectionListDetail";
import PayDetail from "./pay_detail/PayDetail";
import SoldListDetail from "./detail/SoldListDetail";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="app" component={App} title="" hideNavBar={true}></Scene>
                    <Scene key="collectionListDetail" component={CollectionListDetail} title="详情"></Scene>
                    <Scene key="soldListDetail" component={SoldListDetail} title="详情"></Scene>
                    <Scene key="payDetail" component={PayDetail} title="支付详情"></Scene>
                </Stack>
            </Router>
        );
    }
}

export default Main;
