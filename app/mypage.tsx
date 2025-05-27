import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, StyleSheet, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";

const API_BASE_URL = "http://localhost:8081";

type User = {
  uid: string;
  email: string;
  wave: number;
  student_number: number;
  type: string;
  birth_date: string;
  phone: string;
  name: string;
  isManager: boolean;
};

const Main = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 실제로는 로그인된 사용자의 uid 등으로 API를 호출해야 합니다.
    axios
      .get<User>(`${API_BASE_URL}/user/1`) // 예시: 1번 유저 정보
      .then((res) => setUser(res.data))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>유저 정보를 불러올 수 없습니다.</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("../login")}>
          <Text style={styles.buttonText}>login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Page</Text>
      <Text>이름: {user.name}</Text>
      <Text>이메일: {user.email}</Text>
      <Text>Wave: {user.wave}</Text>
      <Text>학번: {user.student_number}</Text>
      <Text>유형: {user.type}</Text>
      <Text>생년월일: {user.birth_date.slice(0, 10)}</Text>
      <Text>전화번호: {user.phone}</Text>
      <Text>관리자 여부: {user.isManager ? "O" : "X"}</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("../login")}>
        <Text style={styles.buttonText}>login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Main;