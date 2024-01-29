import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import cn from "classnames";

type ButtonProps = {
  size?: "small" | "medium" | "large";
  color?: string;
  textColor?: string;
  children: React.ReactNode;
  borderRadius?: string;
  onPress?: () => void;
  variant?: "solid" | "outline" | "soft";
};

const Button: React.FC<ButtonProps> = ({
  size,
  color = "bg-[#40A2D8]",
  textColor,
  children,
  borderRadius = "rounded-md",
  onPress,
  variant = "solid",
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "small":
        return "p-2";
      case "medium":
        return "p-4";
      case "large":
        return "p-6";
      default:
        return "p-4";
    }
  };
  const styles = StyleSheet.create({
    boxShadow: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 3,
      elevation: 5,
    },
  });

  return (
    <TouchableOpacity
      style={styles.boxShadow}
      className={cn(`${color}`, getSizeClasses(), `${borderRadius}`)}
      onPress={onPress}
    >
      <View className={"items-center justify-center"}>
        <Text className={textColor}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

//  <View className="pt-3">
//    <Button
//      size="medium"
//      color="bg-[#AC7D88]"
//      onPress={handlePress}
//      textColor="text-[#fff]"
//      borderRadius="3xl"
//      //variant="outline"
//    >
//      Press me
//    </Button>
//  </View>;
