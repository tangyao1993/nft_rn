import React, {Component} from 'react';
import {View} from "react-native";
import Launcher from "./launcher/Launcher";
import Nav from "./nav/Nav";

class App extends Component {
    constructor() {
        super();
        this.state={
            isShowLauncher:true
        }
    }

    componentDidMount() {
        setTimeout(()=>{
            this.setState({
                isShowLauncher:false
            })
        },2000)

    }

    render() {
        return (
            <View style={{flex:1}}>
                {
                    this.state.isShowLauncher?<Launcher/>:<Nav/>
                }
            </View>
        );
    }
}

export default App;
