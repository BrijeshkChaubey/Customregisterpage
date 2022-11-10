import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Registerdata } from './src/Screen/Registereddata';
import { NavigationContainer } from '@react-navigation/native';
import { Register } from './src/Screen/register';


const Stack = createStackNavigator();


const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="RegisterPage" component={Register} />
                <Stack.Screen name="Registerdatascreen" component={Registerdata} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;


