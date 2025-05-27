import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const Login = () => {
  const handleGoogleLogin = () => {
    console.log("Google 로그인 시도");
    // 여기에 Google 로그인 로직 연결 예정
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/login.png")} // 별 눈 이모지 이미지
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

      <Text style={styles.footerText}>Powered by KMLA Dept. SW & Tech</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8FA",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 40,
    color: "#111111",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    maxWidth: 330,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  footerText: {
    position: "absolute",
    bottom: 20,
    fontSize: 12,
    color: "#888",
  },
});

export default Login;
