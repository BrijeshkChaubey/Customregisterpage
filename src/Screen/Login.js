import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

export const Login = ({ navigation }) => {
    return (
        <View>
            <Text>
                Login page
            </Text>
            <View>
                <Button title='Login' onPress={() => {
                    navigation.navigate('Dashboard');
                }} />
                <TouchableOpacity onPress={() => {
                    navigation.navigate('RegisterPage');
                }}>
                    <Text>If you are not register Register here</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}
