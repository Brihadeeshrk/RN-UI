import React from "react";
import { View, Text } from "react-native";
import classNames from "classnames";

type BadgeProps = {
  text: string;
  backgroundColor?: string;
};

export const Badge: React.FC<BadgeProps> = ({
  text,
  backgroundColor = "bg-red-500",
}) => {
  const classes = classNames(
    "inline-flex",
    "items-center",
    "px-2.5",
    "py-0.5",
    "rounded-full",
    "text-sm",
    "font-medium",
    "text-white",
    "border border-gray-300",
    "mr-3",
    backgroundColor
  );

  return (
    <View className={classes}>
      <Text>{text}</Text>
    </View>
  );
};
