import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Flex from "./components/Core/Flex";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View className="flex-1 items-center justify-center bg-yellow-400">
        <Flex p={5} border="border-2 border-red-500">
          <Text>
            Open up App.tsx to start working on your app! this is another line
            of text
          </Text>
          <Text>
            Open up App.tsx to start working on your app! this is another line
            of text
          </Text>
          <Text>
            Open up App.tsx to start working on your app! this is another line
            of text
          </Text>
          <Text>
            Open up App.tsx to start working on your app! this is another line
            of text
          </Text>
        </Flex>
      </View>
    </>
  );
}
