import React from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';

export const TextInputcomponent = (props) => {
    return (
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{
                flexDirection: "row", borderWidth: 1,
                borderColor: 'blue',
                height: '50%',
                alignItems: "center",
                width: '80%'
            }}>
                <Image source={props?.img} style={{
                    paddingLeft: 30,
                    height: 25,
                    width: 20
                }} />
                <TextInput
                    placeholder={props.placeholder}
                    value={props.value}
                    onChangeText={props.onChangeText}
                    style={{
                        height: 80,

                        padding: 10,
                        width: 300,
                        alignSelf: 'center',
                        // position: 'absolute'
                    }}
                />
            </View>
        </View>


    )

}