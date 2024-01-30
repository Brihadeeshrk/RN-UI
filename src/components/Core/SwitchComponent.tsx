import React from "react";
import { View, Switch } from "react-native";
import cn from "classnames";

export interface SwitchProps {
  trackColor?: { false: string; true: string };
  thumbColor?: { false: string; true: string };
  ios_backgroundColor?: string;
  size?: "small" | "medium" | "large";
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  style?: any;
}

const SwitchComponent: React.FC<SwitchProps> = ({
  trackColor = { false: "#767577", true: "#81b0ff" },
  thumbColor = { false: "#f4f3f4", true: "#f5dd4b" },
  ios_backgroundColor = "#3e3e3e",
  size = "medium",
  value,
  onValueChange,
  style,
}) => {
  const getSizeStyle = () => {
    switch (size) {
      case "small":
        return "w-10 h-5";
      case "large":
        return "w-14 h-7";
      case "medium":
      default:
        return "w-12 h-6";
    }
  };

  return (
    <View className={cn("flex items-center", getSizeStyle(), style)}>
      <Switch
        trackColor={trackColor}
        thumbColor={value ? thumbColor.true : thumbColor.false}
        ios_backgroundColor={ios_backgroundColor}
        onValueChange={onValueChange}
        value={value !== undefined ? value : false}
      />
    </View>
  );
};

export default SwitchComponent;
