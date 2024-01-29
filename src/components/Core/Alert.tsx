import React from "react";
import { View, Text, Modal, TouchableOpacity, TextInput } from "react-native";
import classNames from "classnames";

type AlertProps = {
  message: string;
  visible: boolean;
  onClose: () => void;
  variant?: "alert" | "prompt";
  promptValue?: string;
};

export const Alert: React.FC<AlertProps> = ({
  message,
  visible,
  onClose,
  variant = "alert",
  promptValue = "",
}) => {
  const [value, setValue] = React.useState(promptValue);

  const handlePromptChange = (text: string) => {
    setValue(text);
  };

  const handlePromptSubmit = () => {
    onClose();
    console.log(value);
  };

  const modalStyle = classNames(
    "flex-1",
    "justify-center",
    "items-center",
    "p-4",
    "bg-black/80"
  );

  const contentStyle = classNames(
    "bg-white",
    "rounded-lg",
    "p-4",
    "w-full",
    "max-w-screen-md"
  );

  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View className={modalStyle}>
        <View className={contentStyle}>
          <Text className={"text-lg font-bold mb-2"}>{message}</Text>
          {variant === "prompt" && (
            <>
              <TextInput
                className={
                  "border border-gray-400 rounded px-2 py-1 mb-2 w-full"
                }
                value={value}
                onChangeText={handlePromptChange}
              />
              <TouchableOpacity
                className={"bg-blue-500 rounded px-4 py-2"}
                onPress={handlePromptSubmit}
              >
                <Text className={"text-white font-bold"}>Submit</Text>
              </TouchableOpacity>
            </>
          )}
          <TouchableOpacity
            className={"bg-gray-200 rounded px-4 py-2 mt-2"}
            onPress={onClose}
          >
            <Text className={"text-gray-700 font-bold"}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
