import { useToast } from "react-native-toast-notifications";
import React from "react";
import { View } from "react-native";
import Button from "./Button";

type ToastProps = {};

const Toast: React.FC<ToastProps> = () => {
  const toast = useToast();

  return (
    <View className="mt-3 space-y-3">
      <Button
        color="bg-[#000]"
        textColor="text-[#fff]"
        onPress={() =>
          toast.show("This is a Normal Toast Notification", {
            type: "normal",
            placement: "top",
            duration: 4000,
            animationType: "slide-in",
          })
        }
      >
        Normal Toast
      </Button>
      <Button
        classNames="mt-2"
        color="bg-[#000000]"
        textColor="text-[#fff]"
        onPress={() =>
          toast.show("This is a Success Toast Notification", {
            type: "success",
            placement: "top",
            duration: 4000,
            animationType: "slide-in",
          })
        }
      >
        Success Toast
      </Button>
      <Button
        classNames="mt-2"
        color="bg-[#000000]"
        textColor="text-[#fff]"
        onPress={() =>
          toast.show("This is a Danger Toast Notification", {
            type: "danger",
            placement: "top",
            duration: 4000,
            animationType: "slide-in",
          })
        }
      >
        Danger Toast
      </Button>
      <Button
        classNames="mt-2"
        color="bg-[#000000]"
        textColor="text-[#fff]"
        onPress={() =>
          toast.show("This is a Warning Toast Notification", {
            type: "warning",
            placement: "top",
            duration: 4000,
            animationType: "slide-in",
          })
        }
      >
        Warning Toast
      </Button>
    </View>
  );
};
export default Toast;
