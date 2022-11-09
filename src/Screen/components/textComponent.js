import React from "react";
import { View, Text } from "react-native";

export const TextComponent = ({ text }) => {
    return (
        <View>
            <Text style={{ paddingLeft: 20, color: 'black', marginLeft: 30 }}>{text}</Text>
        </View>
    )
}