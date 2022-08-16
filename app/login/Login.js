import React, {Component} from 'react';
import {Alert, Button, Text, TextInput, View} from "react-native";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',

        }
    }

    render() {
        return (
            <View>
                <Text>用户名</Text>
                <TextInput autoCapitalize={false}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => {

                        this.setState({
                            username:text,
                        })
                    }
                    }
                           value={this.state.username}
                />
                <Text>密码</Text>
                <TextInput autoCapitalize={false} secureTextEntry={true}
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => {
                        this.setState({
                            password:text,
                        })
                    }

                    }
                           value={this.state.password}
                />

                <Button
                    title="Press me"
                    color="#f194ff"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                />
            </View>

        );
    }
}

export default Login;
