import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type CheckboxProps = {
  label?: string;
  checked?: boolean;
  onPress?: () => void;
  uncheckedColor?: string;
  checkedColor?: string;
  labelColor?: string;
  size?: "small" | "medium" | "large";
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  onPress,
  uncheckedColor = "#000",
  checkedColor = "#0044ff",
  labelColor = "#000",
  size = "medium",
}) => {
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          box: { height: 16, width: 16, borderRadius: 2 },
          checkmark: { fontSize: 12 },
        };
      case "large":
        return {
          box: { height: 32, width: 32, borderRadius: 4 },
          checkmark: { fontSize: 24 },
        };
      case "medium":
      default:
        return {
          box: { height: 24, width: 24, borderRadius: 3 },
          checkmark: { fontSize: 18 },
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.box,
          sizeStyles.box,
          {
            backgroundColor: checked ? checkedColor : "transparent",
            borderColor: checked ? checkedColor : uncheckedColor,
            borderWidth: 2,
          },
        ]}
      >
        {checked && (
          <Text
            style={[styles.checkmark, sizeStyles.checkmark, { color: "white" }]}
          >
            ✓
          </Text>
        )}
      </View>
      {label && (
        <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  checkmark: {},
  label: {
    fontSize: 16,
  },
});

export default Checkbox;
