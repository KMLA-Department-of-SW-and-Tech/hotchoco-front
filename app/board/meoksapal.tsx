import React from "react";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useRouter } from "expo-router";

export default function MainBoard() {
    // 파일이름이나 주소는 임의로 설정함. 나중에 바꿀 것.

    const router = useRouter();

    const styles = StyleSheet.create({
        containor: {
            backgroundColor: "#fff",
            flex: 1,
            padding: 30,
        },
        header: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
        },
        headerTitle: {
            alignItems: "center",
            fontSize: 27,
            fontWeight: "bold",
            marginLeft: 7,
            paddingLeft: 5,
        },
        separator: {
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
        }
    })

    return(
        <View style={styles.containor}>
            <View style={styles.header}>
                <Pressable onPress={() => router.push("../board")}>
                    <Image source={require("../../assets/images/Vector.png")} />
                </Pressable>
                <Text style={styles.headerTitle}>먹사팔</Text>
            </View>
            <View style={styles.separator} />
        </View>
    )
}