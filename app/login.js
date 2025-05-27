import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Login = () => {
  const handleGoogleLogin = () => {
    console.log("Google 로그인 시도");
    };

  return (
        <View style={styles.container}>
            <Image
                source={require("../assets/images/login.png")}
                style={styles.logo}
            />
            <Text style={styles.title}>로그인</Text>
            <TouchableOpacity style={styles.button} onPress={handleGoogleLogin}>
                <Image
                    source={require("../assets/images/google-icon.png")}
                    style={styles.googleIcon}
                />
                <Text style={styles.buttonText}>Continue with Google</Text>
            </TouchableOpacity>
        </View>
    );
}

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
        top: 97,
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
    },

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

    logo: {
        width: 115,
        height:113,
        top: 191.52,
        Left: 130
    },

    googleIcon: {
        width: 18,
        height: 18,
        top: 370,
        left: 75,
    }
});

export default Login;