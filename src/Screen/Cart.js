import React from 'react';
import { View, Text, Button } from 'react-native';

export const Cart = ({ navigation }) => {
    return (
        <View>
            <Text>
                Cart page
            </Text>
            <View>
                <Button title='Press me' onPress={() => {
                    navigation.navigate('Dashboard');
                }} />
            </View>
        </View>
    )

}
