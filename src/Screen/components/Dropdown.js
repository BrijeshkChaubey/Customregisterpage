import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Post Graduate', value: '1' },
    { label: 'Graduate', value: '2' },
    { label: 'HSC/Diploma', value: '3' },
    { label: 'SSC', value: '4' },
];

const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Education
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            // renderLeftIcon={() => (
            //     // <Image source={require('../../assets/darow.jpg')} style={styles.icon}
            //     // />

            // )}
            />
        </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: '90%',
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'blue',
        borderWidth: 1,

        paddingHorizontal: 8,
    },
    icon: {
        paddingLeft: 30,
        height: 25,
        width: 20,
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
});