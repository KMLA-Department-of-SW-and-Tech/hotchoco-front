import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Login from "./login";
import { useRouter } from "expo-router";

const Main = ({}) => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Page</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push("../login")}>
        <Text style={styles.buttonText}>login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create ({
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
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Main;