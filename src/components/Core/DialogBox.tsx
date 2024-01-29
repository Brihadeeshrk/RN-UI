import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";

import { AntDesign } from "@expo/vector-icons";

type DialogBoxProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const DialogBox: React.FC<DialogBoxProps> = ({
  visible,
  onClose,
  children,
}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <View className={"flex-1 justify-center items-center bg-black/70 "}>
        <View className={"bg-white rounded-lg p-5 w-11/12"}>
          <TouchableOpacity
            className={"absolute top-2 right-2"}
            onPress={onClose}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <View className="mt-5">{children}</View>
        </View>
      </View>
    </Modal>
  );
};
