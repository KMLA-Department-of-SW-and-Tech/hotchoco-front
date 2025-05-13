import React from "react";
import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet, 
  Text, 
  View, 
  Pressable,
  Image,
}
from 'react-native';
import { useRouter } from "expo-router";

export default function Board() {

    const router = useRouter();

    const [isBtnClicked, setIsBtnClicked] = React.useState(true);
    const [textClicked, setTextClicked] = React.useState(0);

    const menu = () => setIsBtnClicked(true);
    const timeOrder = () => setIsBtnClicked(false);

    const clicked = (num: number) => setTextClicked(num);

    

    const styles = StyleSheet.create({
        container: {
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
            marginLeft: 7
        },
        clickedBtn: {
            backgroundColor: "#3BBE95",
        },
        btn: {
            borderColor: "#111111",
            borderWidth: 1,
        },
        btnText: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#111111",
            textAlign: "center",
        },
        clickedBtnText: {
                fontSize: 14,
                fontWeight: "bold",
                color: "#fff",
                textAlign: "center",
        },
        title: {
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 15,
        },
        subTitle: {
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 19,
        },
        boardTitle: {
            fontSize: 17,
            fontWeight: "bold",
            marginBottom: 15,
        },
        moreOption: {
            fontSize: 12,
            color: "#767676",
            marginTop: 15,
        },
        separator: {
            borderBottomWidth: 1,
            borderBottomColor: "#ddd",
            marginVertical: 22,
        },
        boardRow: {
            flexDirection: "row",
            justifyContent: "flex-start",
        },
        menuBtn: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 9,
            paddingHorizontal: 16,
            marginHorizontal: 4,
            minWidth: 60,
            height: 35,
            borderRadius: 999,
        },
        timeOrderBtn: {
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 9,
            paddingHorizontal: 12,
            minWidth: 72,
            height: 35,
            borderRadius: 999,
            flexGrow: 0,
            marginHorizontal: 4,
        },
    })

    return(
        <View style={styles.container}>
            <StatusBar style="dark" />
            <View style={styles.header}>
                <Image source={require("../assets/images/chatbubbles-outline.png")} />
                <Text style={styles.headerTitle}>게시판</Text>
            </View>
            <View style={{justifyContent: "space-between", flexDirection:"row"}}>
                <View style={{flexDirection: "row"}}>
                    <Pressable style={[styles.menuBtn, isBtnClicked? styles.clickedBtn : styles.btn]} onPress={menu}>
                        <Text style={isBtnClicked? styles.clickedBtnText : styles.btnText}>메뉴</Text>
                    </Pressable>
                    <Pressable style={[styles.timeOrderBtn, isBtnClicked? styles.btn : styles.clickedBtn]} onPress={timeOrder}>
                        <Text style={isBtnClicked? styles.btnText : styles.clickedBtnText}>최신순</Text>
                    </Pressable>
                </View>
                {isBtnClicked && (<View>
                    <Text style={[styles.moreOption, textClicked==14? {textDecorationLine: "underline"} : null]} onPress={() => clicked(14)}>
                        게시판 개설요청{" >"}
                    </Text>
                </View>)}
            </View>
            <View style={styles.separator}/>
            {isBtnClicked && (<>
            <View style={styles.boardRow}>
                <View>
                    <Text style={styles.title}>공지</Text>
                        <Text style={[styles.boardTitle, textClicked==1? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(1); router.push("/board/main_board");}}>전체공지</Text>
                        <Text style={[styles.boardTitle, textClicked==2? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(2); router.push("/board/legislative");}}>입법위원회</Text>
                        <Text style={[styles.boardTitle, textClicked==3? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(3); router.push("/board/judicial");}}>사법위원회</Text>
                        <Text style={[styles.boardTitle, textClicked==4? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(4); router.push("/board/administrative")}}>행정위원회</Text>
                        <Text style={[styles.boardTitle, textClicked==5? {textDecorationLine: "underline"} : null]} onPress={() => clicked(5)}>사설게시판</Text>
                </View>
                <View style={{ marginLeft: 100 }}>
                    <Text style={styles.title}>(기능)</Text>
                    <Text style={[styles.boardTitle, textClicked==6? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(6); router.push("/board/meoksapal")}}>먹사팔</Text>
                    <Text style={[styles.boardTitle, textClicked==7? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(7); router.push("/board/tteoljup")}}>떨줍</Text>
                    <Text style={[styles.boardTitle, textClicked==8? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(8); router.push("/board/mojipgonggo")}}>모집공고</Text>
                    <Text style={[styles.boardTitle, textClicked==9? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(9); router.push("/board/wavers29")}}>29기 재학생</Text>
                </View>
            </View>
            <View style={styles.separator}/>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={styles.subTitle}>즐겨찾는 게시판</Text>
                <Text style={[styles.moreOption, textClicked==15? {textDecorationLine: "underline"} : null]} onPress={() => clicked(15)}>
                    더보기{" >"}
                </Text>
            </View>
            <View>
                <Text style={[styles.boardTitle, textClicked==10? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(10); router.push("/board/free_board")}}>자유게시판</Text>
                <Text style={[styles.boardTitle, textClicked==11? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(11); router.push("/board/anonymous")}}>익명게시판</Text>
                <Text style={[styles.boardTitle, textClicked==12? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(12); router.push("/board/question")}}>질문게시판</Text>
                <Text style={[styles.boardTitle, textClicked==13? {textDecorationLine: "underline"} : null]} onPress={() => {clicked(13); router.push("/board/share")}}>자료공유게시판</Text>
            </View>
            </> )}
        </View>
    )
}