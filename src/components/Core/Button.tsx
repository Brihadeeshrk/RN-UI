import React from "react";
import { Text, TouchableOpacity } from "react-native";
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
  color,
  textColor,
  children,
  borderRadius,
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

  return (
    <TouchableOpacity
      className={cn(`${color}`, getSizeClasses(), `rounded-${borderRadius}`)}
      onPress={onPress}
    >
      <Text className={textColor}>{children}</Text>
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
