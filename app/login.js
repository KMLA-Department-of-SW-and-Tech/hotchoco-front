import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Login = () => {
    const [studentId, setStudentId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Logging in with:", studentId, password);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>🤩</Text>
            <Text style={styles.title}>로그인</Text>

            <TextInput
                style={styles.input}
                placeholder="학번"
                value={studentId}
                onChangeText={setStudentId}
            />

            <TextInput
                style={styles.input}
                placeholder="비밀번호"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText2}>비밀번호 찾기</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#fff",
    },

    emoji:{

    },

    title: {
        fontFamily: "Arimo",
        fontWeight: "700",
        fontSize: 25,
        lineHeight: 34,
        letterSpacing: -2.5,
        marginBottom: 20,
    },

    input:{
        width: 306,
        height: 44,
        borderRadius: 8,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 16,
        marginBottom: 10,
        backgroundColor: "#F2F3F3",
        borderColor: "#CBCDD1",
    },

    button2:{
        width: 306,
        height: 12,
        backgroundColor: "#000",      
    },

    buttonText2:{
        fontFamily: "Pretendard",
        fontWeight: 500,
        fontSize: 12,
        textAlign: "right",
        color: "#000",
    },
});