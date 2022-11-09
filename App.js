import React from 'react';
import { View, Text } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './src/Screen/Login';
import { NavigationContainer } from '@react-navigation/native';
import { Register } from './src/Screen/register';
import { Dashboard } from './src/Screen/Dashboard';
import { Cart } from './src/Screen/Cart';
import { Provider } from 'react-redux';

const Stack = createStackNavigator();


const App = () => {
    return (
        // <Provider >
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Loginscreen" component={Login} />
                <Stack.Screen name="RegisterPage" component={Register} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Cart" component={Cart} />
            </Stack.Navigator>
        </NavigationContainer>
        // </Provider>

    )
}
export default App;


