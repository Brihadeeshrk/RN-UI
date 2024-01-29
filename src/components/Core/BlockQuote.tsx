import React from "react";
import { View, Text } from "react-native";
import classNames from "classnames";

type BlockQuoteProps = {
  text: string;
  author?: string;
  style?: string;
};

export const BlockQuote: React.FC<BlockQuoteProps> = ({
  text,
  author,
  style,
}) => {
  const classes = classNames(
    "border-l-4",
    "border-gray-500",
    "pl-4",
    "py-2",
    "my-4",
    style
  );

  return (
    <View className={classes}>
      <Text className={"italic text-gray-700"}>{text}</Text>
      {author && (
        <Text className={"mt-2 font-bold text-gray-900"}>- {author}</Text>
      )}
    </View>
  );
};
