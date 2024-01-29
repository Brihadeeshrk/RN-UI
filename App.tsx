import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./src/screens/Home.screen";
import UIContextProvider from "./src/store/context";
// import FlexScreen from "./screens/Flex.screen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <UIContextProvider>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Home" component={HomeScreen} />
            {/* <Drawer.Screen name="Flex" component={FlexScreen} /> */}
          </Drawer.Navigator>
        </NavigationContainer>
      </UIContextProvider>
    </>
  );
}
