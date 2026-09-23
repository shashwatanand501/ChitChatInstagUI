import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";


export default function registerScreen() {
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [SecondName, setSecondName] = useState('')
    const [phoneNum, setPhoneNum] = useState(Number)
    const [userName, setUserName] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    return(
        <SafeAreaView>
            <View>
                <Text>Register Screen</Text>
            </View>
        </SafeAreaView>
    )
}