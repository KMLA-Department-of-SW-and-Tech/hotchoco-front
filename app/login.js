import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const Login = () => {
    return (
        <View style={styles.container}>
            <Image
                    source={require()}
                    style={{}}
            />
            <Text style={styles.title}>로그인</Text>

            <TouchableOpacity style={styles.button} onPress={}>
                <Image
                    source={require()}
                    style={{}}
                />
                <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#F8F8FA",
    },

    title:{
        width: 68,
        height: 34,
        top: 297,
        left: 161,
        fontFamily: "Arimo",
        fontWeight: "700",
        fontSize: 25,
        lineHeight: 34,
        letterSpacing: 2.5,
        color: "111111",
    },

    button: {
        width: 326,
        height: 57,
        top: 393,
        left: 32,
        borderRadius: 10,
        backgroundColor: "#FFFFFF",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        borderWidth: 1,
        borderColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
    }

    buttonText: {
        width: 253,
        height: 26,
        top: 408,
        left: 79,
        fontFamily: "Arimo",
        fontWeight: "700",
        fontSize: 25,
        lineHeight: 25,
        letterSpacing: 1,
        textAlign: "center",
        color: "#000000",
    },
});