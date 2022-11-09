import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import DropdownComponent from './components/Dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TextComponent } from './components/textComponent';
import { TextInputcomponent } from './components/textInputComponent';
import { checkPasswordValidity } from '../validation/passwordvalidation';

export const Register = ({ navigation }) => {
    const [checkpass, setCheckpass] = useState('');
    const [checked, setChecked] = useState('Male');
    const [text, setText] = useState('');
    const [show, setShow] = useState(false);
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
    })

    const onfnameChange = (fname) => {
        if (fname.length == 0 && fname.length <= 3) {
            setIsvalid({ ...isvalid, fname: false })
        }
        else {
            setIsvalid({ ...isvalid, fname: true })
            setData({ ...data, fname })

        }
    }
    const onlnameChange = (lname) => {
        if (lname.length == 0 && lname.length <= 3) {
            setIsvalid({ ...isvalid, lname: false })
        }
        else {
            setIsvalid({ ...isvalid, lname: true })
            setData({ ...data, lname })

        }
    }
    const onPhonenumberChange = (Phonenumber) => {
        if (Phonenumber.length === 0 && Phonenumber.length < 10) {
            setIsvalid({ ...isvalid, Phonenumber: false });
        } else {
            setData({ ...data, Phonenumber })
            setIsvalid({ ...isvalid, Phonenumber: true });

        }
    }
    const onemailChange = (email) => {
        let re = /\S+@\S+\.\S+/;
        let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

        setData({ ...data, email });
        if (data.email.length === 0) {
            setIsvalid({ ...isvalid, email: false });
        } else if (re.test(text) || regex.test(text)) {
            setIsvalid({ ...isvalid, email: false });
        } else {
            setIsvalid({ ...isvalid, email: true });

        }
    }
    const onpasswordChange = (password) => {
        var checkpassword = checkPasswordValidity(password)
        setCheckpass(checkpassword)
        console.log("Checkpass", checkpassword);
        if (checkpassword) {
            setData({ ...data, password })
            setIsvalid({ ...isvalid, password: true });

        }
        else {
            setIsvalid({ ...isvalid, password: false });

        }
    }
    const onconfirmpasswordeChange = (confirmpassword) => {
        if (data.password === confirmpassword) {
            setData({ ...data, confirmpassword })
            setIsvalid({ ...isvalid, confirmpassword: true });


        }
        else {
            setIsvalid({ ...isvalid, confirmpassword: false });

        }
    }
    const onsummit = () => {
        console.log("Data==>", data);
    }
    const showDatePicker = () => {
        setShow(true);
    };
    const hideDatePicker = () => {
        setShow(false);
    };
    const handleConfirm = date => {
        let current = new Date();
        let todaysDate =
            current.getDate() +
            '-' +
            (current.getMonth() + 1) +
            '-' +
            current.getFullYear();

        let dateTimeString =
            date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
        if (todaysDate === text) {
            setText('');
            Alert.alert('Date of birth should be less than current date');
        } else {
            setText(dateTimeString);
        }

        hideDatePicker();
    };

    return (
        <ScrollView>
            <View>
                <View>
                    <Text>
                        Register page
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
                        <Text style={{ color: 'red' }}>
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
                        img={require('loginwithredux/src/assets/user.jpeg')}

                    />
                    {isvalid.lname ? (
                        []
                    ) : (
                        <Text style={{ color: 'red' }}>
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
                        img={require('loginwithredux/src/assets/telephone.jpeg')}

                    />
                    {isvalid.Phonenumber ? (
                        []
                    ) : (
                        <Text style={{ color: 'red' }}>
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
                        img={require('loginwithredux/src/assets/mail.jpeg')}

                    />
                    {isvalid.email ? (
                        []
                    ) : (
                        <Text style={{ color: 'red' }}>
                            Email can't be empty
                        </Text>
                    )}
                </View>
                <TextComponent text='Gender*' />

                <View
                    style={{
                        marginBottom: 30,
                        marginLeft: 30,
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: 5,
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
                        img={require('loginwithredux/src/assets/lock.jpg')}

                    />
                    {isvalid.password ? (
                        []
                    ) : (


                        data.password.length == 0 ?
                            (<Text style={{ color: 'red' }}>
                                password can't be empty
                            </Text>
                            ) : (
                                <Text style={{ color: 'red' }}>
                                    {checkpass}

                                </Text>

                            )

                    )}
                    <TextComponent text='Confirm Password*' />
                    <TextInputcomponent
                        placeholder='Enter Confirm Password here'

                        value={data.confirmpassword}
                        onChangeText={value => {
                            onconfirmpasswordeChange(value);
                        }}
                        img={require('loginwithredux/src/assets/lock.jpg')}

                    />
                    {isvalid.confirmpassword ? (
                        []
                    ) : (
                        <Text style={{ color: 'red' }}>
                            Field can't be empty
                        </Text>
                    )}

                </View>
                <DropdownComponent />
                <View>
                    <Text
                        style={{ marginLeft: 10, fontWeight: 'bold', marginTop: 10 }}>
                        Date Of Birth*
                    </Text>

                    <TouchableOpacity onPress={showDatePicker}>
                        <View style={styles.searchSection}>
                            <Text style={styles.input}>{text}</Text>
                            <DateTimePickerModal
                                isVisible={show}
                                mode="date"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />
                        </View>
                    </TouchableOpacity>
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
            </View>
        </ScrollView>

    )

}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'rgb(93, 95, 222)',
        borderRadius: 8,
        height: 48,
        marginBottom: 30,
        justifyContent: 'center',
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
});