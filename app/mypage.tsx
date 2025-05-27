import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

const MyPage = () => {
  const user = {
    name: "박강현",
    generation: 28,
    introduction: "안녕하세요 28기 박강현입니다.",
    phone: "010-1234-5678",
    email: "tim.jennings@example.com",
    profileImage: require("/Users/pminmin861/Desktop/kmla-online-front/hotchoco-front/assets/images/profile.png"), // 예시
    backgroundImage: require("/Users/pminmin861/Desktop/kmla-online-front/hotchoco-front/assets/images/background.png"), // 예시
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={user.backgroundImage} style={styles.backgroundImage} />

      <View style={styles.profileSection}>
        <View style={styles.profileWrapper}>
          <Image source={user.profileImage} style={styles.profileImage} />
          <TouchableOpacity style={styles.heartIcon}>
            <Text style={styles.heartText}>❤️</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.nameRow}>
          <Text style={styles.name}>{`${user.generation}기 ${user.name}`}</Text>
          <TouchableOpacity>
            <Image
              source={require("/Users/pminmin861/Desktop/kmla-online-front/hotchoco-front/assets/images/edit.png")}
              style={styles.editIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.tagButton, styles.activeTag]}>
            <Text style={styles.tagText}>정보</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagButton}>
            <Text style={styles.tagText}>대화하기</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagButton}>
            <Text style={styles.tagText}>글 목록</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.label}>소개</Text>
          <Text style={styles.info}>{user.introduction}</Text>

          <Text style={styles.label}>전화번호</Text>
          <Text style={styles.info}>{user.phone}</Text>

          <Text style={styles.label}>이메일</Text>
          <Text style={styles.info}>{user.email}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
  backgroundImage: {
    width: "100%",
    height: 200,
  },
  profileSection: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -50,
    alignItems: "center",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  profileWrapper: {
    position: "absolute",
    top: -60,
    alignItems: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "#fff",
  },
  heartIcon: {
    position: "absolute",
    bottom: 0,
    right: -10,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 4,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  heartText: {
    fontSize: 16,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 6,
  },
  editIcon: {
    width: 16,
    height: 16,
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 20,
    marginBottom: 15,
  },
  tagButton: {
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: "#E5E7EB",
    marginHorizontal: 5,
  },
  activeTag: {
    backgroundColor: "#34D399",
  },
  tagText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#000",
  },
  infoSection: {
    width: "100%",
    marginTop: 10,
  },
  label: {
    marginTop: 16,
    fontSize: 15,
    fontWeight: "bold",
    color: "#111827",
  },
  info: {
    fontSize: 15,
    color: "#374151",
    marginTop: 4,
  },
});

export default MyPage;
