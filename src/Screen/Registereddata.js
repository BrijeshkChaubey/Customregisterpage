import React, { useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

export const Registerdata = ({ navigation, route }) => {
    const data = route.params
    const Gender = route.params.checked
    const Date = route.params.date
    const Education = route.params.label


    useEffect(() => {
        console.log("Data==>", data);

    })
    return (
        <View style={{ backgroundColor: '#f9f4d9', height: '100%' }}>
            <Text style={styles.text1}>
                _____User data_____
            </Text>
            <Text style={styles.text}>First name--{data.data.fname}</Text>
            <Text style={styles.text}>Last name--{data.data.lname}</Text>
            <Text style={styles.text}>Phone Number--{data.data.Phonenumber}</Text>
            <Text style={styles.text}>Email--{data.data.email}</Text>
            <Text style={styles.text}>Gender--{Gender}</Text>
            <Text style={styles.text}>Education--{Education}</Text>
            <Text style={styles.text}>Date of birth--{Date.toLocaleDateString()}</Text>


        </View>
    )


}
const styles = StyleSheet.create({
    text: {
        margin: 20,
        paddingLeft: "2%",
        fontSize: 25,
        color: 'black',
        marginLeft: 30,
        fontWeight: "bold"
    },
    text1: {
        marginBottom: 10,
        alignSelf: "center",

        color: "black",
        fontSize: 30,
        fontWeight: 'bold'
    }
})
