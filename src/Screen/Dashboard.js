import React from 'react';
import { View, Text, Button } from 'react-native';

export const Dashboard = ({ navigation }) => {
    return (
        <View>
            <Text>
                Dashboard page
            </Text>
            <View>
                <Button title='Press me' onPress={() => {
                    navigation.navigate('Cart');
                }} />
            </View>
        </View>
    )

}
