import React from "react";
import { TextInput } from "react-native";
import cn from "classnames";

export interface TextAreaProps {
  value: string;
  placeholder?: string;
  maxLength?: number;
  numberOfLines?: number;
  onValueChange?: (value: string) => void;
  style?: any;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  placeholder = "Enter text...",
  maxLength = 200,
  numberOfLines = 4,
  onValueChange,
  style,
}) => {
  return (
    <TextInput
      value={value}
      multiline
      placeholder={placeholder}
      maxLength={maxLength}
      numberOfLines={numberOfLines}
      onChangeText={onValueChange}
      className={cn("border p-2 border-gray-300 rounded", style)}
    />
  );
};

export default TextArea;
