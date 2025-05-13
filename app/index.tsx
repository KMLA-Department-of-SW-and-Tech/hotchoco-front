import { Text, View } from "react-native";
import { Redirect } from "expo-router"; //나중에 삭제할 것

export default function Index() {
  return (
    <Redirect href="/board" /> // 나중에 삭제하고 아래 주석문 처리 취소할 것
    /*<View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>*/
  );
}
