import React from "react";
import { View } from "react-native";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <View className="p-3 border border-gray-400 rounded-lg mt-5 mb-5">
      {children}
    </View>
  );
};
export default Container;
