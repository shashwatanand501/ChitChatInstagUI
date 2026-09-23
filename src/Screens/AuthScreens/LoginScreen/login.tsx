import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function loginscreen() {
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    return (
        <SafeAreaView>
            <View>
                <Text>
                    Login Screen
                </Text>
            </View>
        </SafeAreaView>
    )
}