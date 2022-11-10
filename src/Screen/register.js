import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, ScrollView, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
// import DropdownComponent from './components/Dropdown';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TextComponent } from './components/textComponent';
import { Dropdown } from 'react-native-element-dropdown';

import { TextInputcomponent } from './components/textInputComponent';
import { checkPasswordValidity, emailValidation } from '../validation/passwordvalidation';

export const Register = ({ navigation }) => {
    const datas = [
        { label: 'Post Graduate', value: '1' },
        { label: 'Graduate', value: '2' },
        { label: 'HSC/Diploma', value: '3' },
        { label: 'SSC', value: '4' },
    ];
    const [label, setLabel] = useState('');
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [checkpass, setCheckpass] = useState('');
    const [checkemail, setCheckemail] = useState('');
    const [checked, setChecked] = useState('Male');
    const [data, setData] = useState({
        fname: '',
        lname: '',
        Phonenumber: '',
        email: '',
        password: '',
        confirmpassword: '',

    })
    const [isvalid, setIsvalid] = useState({
        fname: false,
        lname: false,
        Phonenumber: false,
        email: false,
        password: false,
        confirmpassword: false,
    });
    const [date, setDate] = useState(new Date())
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
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

    const onfnameChange = (fname) => {
        if (fname.length == 0 || fname.length < 3) {
            setIsvalid({ ...isvalid, fname: false })
            setData({ ...data, fname })
        } else {
            setIsvalid({ ...isvalid, fname: true })
            setData({ ...data, fname })
        }
    }
    const onlnameChange = (lname) => {
        if (lname.length == 0 || lname.length < 3) {
            setIsvalid({ ...isvalid, lname: false })
            setData({ ...data, lname })
        } else {
            setIsvalid({ ...isvalid, lname: true })
            setData({ ...data, lname })
        }
    }
    const onPhonenumberChange = (Phonenumber) => {
        if (Phonenumber.length === 0 || Phonenumber.length < 10) {
            setIsvalid({ ...isvalid, Phonenumber: false });
            setData({ ...data, Phonenumber })
        } else {
            setData({ ...data, Phonenumber })
            setIsvalid({ ...isvalid, Phonenumber: true });
        }
    }
    const onemailChange = (email) => {
        var checkEmailMsg = emailValidation(email)
        console.log("checkEmailMsg=>", checkEmailMsg);
        setCheckemail(checkEmailMsg);
        if (checkEmailMsg) {
            setIsvalid({ ...isvalid, email: false });
            setData({ ...data, email });
        } else {
            setIsvalid({ ...isvalid, email: true });
            setData({ ...data, email });
        }
    }
    const onpasswordChange = (password) => {
        var checkpassword = checkPasswordValidity(password)
        setCheckpass(checkpassword)
        // console.log("Checkpass", checkpassword);
        if (checkpassword) {
            setData({ ...data, password })
            setIsvalid({ ...isvalid, password: false });
        } else {
            setIsvalid({ ...isvalid, password: true });
            setData({ ...data, password })
        }
    }
    const onconfirmpasswordeChange = (confirmpassword) => {
        if (data.password === confirmpassword) {
            setData({ ...data, confirmpassword })
            setIsvalid({ ...isvalid, confirmpassword: true });
        } else {
            setIsvalid({ ...isvalid, confirmpassword: false });
            setData({ ...data, confirmpassword });
        }
    }
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleConfirm = (date) => {
        setDate(date);
        hideDatePicker();
    };

    const onsummit = () => {
        if (isvalid.fname && isvalid.lname && isvalid.email && isvalid.password && isvalid.confirmpassword && isvalid.Phonenumber && label !== '') {
            navigation.navigate('Registerdatascreen', {
                data, date, label, checked,
            });
            // console.log("Data==>", data);

        } else {
            Alert.alert('All highlighted fields are required')
        }
    }
    return (
        <ScrollView>
            <View>
                <Text style={{ alignSelf: "center", color: "black", fontSize: 30, fontWeight: 'bold' }}>
                    Register
                </Text>
                <TextComponent text='First Name*' />
                <TextInputcomponent
                    placeholder='Enter your first name here'
                    value={data.fname}
                    onChangeText={value => {
                        onfnameChange(value);
                    }}
                    img={require('loginwithredux/src/assets/user.jpeg')}
                />
                {isvalid.fname ? (
                    []
                ) : (
                    <Text style={styles.helpTextStyle}>
                        First name can't be empty
                    </Text>
                )}
                <TextComponent text='Last Name*' />
                <TextInputcomponent
                    placeholder='Enter your last name here'
                    value={data.lname}
                    onChangeText={value => {
                        onlnameChange(value);
                    }}
                    img={require('loginwithredux/src/assets/user.jpeg')} />
                {isvalid.lname ? (
                    []
                ) : (
                    <Text style={styles.helpTextStyle}>
                        Last name can't be empty
                    </Text>
                )}
                <TextComponent text='Phone Number*' />
                <TextInputcomponent
                    placeholder='Enter your Phone number here'
                    value={data.Phonenumber}
                    onChangeText={value => {
                        onPhonenumberChange(value);
                    }}
                    img={require('loginwithredux/src/assets/telephone.jpeg')} />
                {isvalid.Phonenumber ? (
                    []
                ) : (
                    <Text style={styles.helpTextStyle}>
                        Phonenumber can't be empty
                    </Text>
                )}
                <TextComponent text='Email*' />
                <TextInputcomponent
                    placeholder='Enter your Email here'
                    value={data.email}
                    onChangeText={value => {
                        onemailChange(value);
                    }}
                    img={require('loginwithredux/src/assets/mail.jpeg')} />
                {isvalid.email ? (
                    []
                ) : (
                    data.email.length === 0 ? (
                        <Text style={styles.helpTextStyle}>Email can't be empty</Text>
                    ) : (
                        <Text style={styles.helpTextStyle}>
                            {checkemail}
                        </Text>)
                )}
            </View>
            <TextComponent text='Gender*' />
            <View
                style={{
                    marginBottom: 30,
                    marginLeft: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                <Text style={styles.gender}>Male</Text>
                <RadioButton
                    value="Male"
                    status={checked === 'Male' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Male')}
                />
                <Text style={styles.gender}>Female</Text>
                <RadioButton
                    value="Female"
                    status={checked === 'Female' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('Female')}
                />
            </View>
            <View>
                <TextComponent text='Password*' />
                <TextInputcomponent
                    placeholder='Enter Password  here'
                    value={data.password}
                    onChangeText={value => {
                        onpasswordChange(value);
                    }}
                    img={require('loginwithredux/src/assets/lock.jpg')} />
                {isvalid.password ? (
                    []
                ) : (data.password.length == 0 ?
                    (<Text style={styles.helpTextStyle}>
                        password can't be empty
                    </Text>
                    ) : (
                        <Text style={{ color: 'red' }}>{checkpass} </Text>
                    )
                )}
                <TextComponent text='Confirm Password*' />
                <TextInputcomponent
                    placeholder='Enter Confirm Password here'
                    value={data.confirmpassword}
                    onChangeText={value => {
                        onconfirmpasswordeChange(value);
                    }}
                    img={require('loginwithredux/src/assets/lock.jpg')} />
                {isvalid.confirmpassword ? (
                    []
                ) : (
                    <Text style={styles.helpTextStyle}>Field can't be empty</Text>
                )}
            </View>
            <TextComponent text='Education*' />
            <View style={styles.container}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={datas}
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
                        setLabel(item.label)
                        setIsFocus(false);
                    }}

                />
            </View>
            <View>
                <TextComponent text='Date Of Birth*' />
                <View style={styles.dateView}>
                    <Text>  {date.toLocaleDateString()}</Text>
                    <TouchableOpacity onPress={showDatePicker}>
                        <Image source={require('loginwithredux/src/assets/darow.jpg')}
                            style={{
                                paddingLeft: 30,
                                height: 25,
                                width: 20
                            }} />

                    </TouchableOpacity>
                </View>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    maximumDate={Date.now()}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
            <View style={styles.button}>
                <TouchableOpacity onPress={() => {
                    onsummit()
                }}>
                    <Text style={styles.buttonTitle}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </ScrollView>

    )

}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(93, 95, 222)',
        height: "5%",
        width: "80%",
        marginBottom: "10%",
        justifyContent: 'center',
        alignSelf: 'center'
    },
    buttonTitle: {
        color: '#FFFFFF',
        fontSize: 17,
        fontWeight: '600',
        lineHeight: 22,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 32,
    },
    forgotPasswordContainer: {
        alignItems: 'flex-end',
    },
    form: {
        alignItems: 'center',
        backgroundColor: 'rgb(58, 58, 60)',
        borderRadius: 8,
        flexDirection: 'row',
        height: 48,
        paddingHorizontal: 16,
    },
    label: {
        color: 'rgba(235, 235, 245, 0.6)',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
        width: 80,
    },
    root: {
        flex: 1,
    },
    safeAreaView: {
        flex: 1,
    },
    subtitle: {
        color: 'rgba(235, 235, 245, 0.6)',
        fontSize: 17,
        fontWeight: '400',
        lineHeight: 22,
    },
    textButton: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 20,
    },
    textInput: {
        color: '#FFFFFF',
        flex: 1,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: '700',
        lineHeight: 34,
    },
    text: {
        color: 'white',
        fontWeight: '700',
    },
    textFailed: {
        alignSelf: 'flex-end',
        color: 'red',
    },
    input: {
        padding: 10,
        flex: 1,
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        margin: 10,
        borderWidth: 1,
    },
    gender: {
        fontSize: 15,
        color: 'black',
        paddingLeft: 10,
    },
    dropdown: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    icon: {
        marginRight: 5,
        marginLeft: 5,
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
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    },
    helpTextStyle: {
        color: "red",
        paddingLeft: "10%",
        paddingBottom: "4%"
    },
    dateView: {
        // backgroundColor: "pink",
        display: "flex",
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "80%",
        alignSelf: 'center',
        paddingHorizontal: "4%",
        borderWidth: 1,
        borderColor: "#00008B",
        marginVertical: "2%",
        height: 50
    },
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