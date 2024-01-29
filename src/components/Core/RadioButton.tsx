import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

type RadioButtonProps = {
  label?: string;
  checked?: boolean;
  onPress?: () => void;
  uncheckedColor?: string;
  checkedColor?: string;
  labelColor?: string;
  size?: "small" | "medium" | "large";
};

const RadioButton: React.FC<RadioButtonProps> = ({
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
          outerCircle: { height: 16, width: 16, borderRadius: 8 },
          innerCircle: { height: 8, width: 8, borderRadius: 4 },
        };
      case "large":
        return {
          outerCircle: { height: 32, width: 32, borderRadius: 16 },
          innerCircle: { height: 16, width: 16, borderRadius: 8 },
        };
      case "medium":
      default:
        return {
          outerCircle: { height: 24, width: 24, borderRadius: 12 },
          innerCircle: { height: 12, width: 12, borderRadius: 6 },
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.outerCircle,
          sizeStyles.outerCircle,
          { borderColor: checked ? checkedColor : uncheckedColor },
        ]}
      >
        {checked && (
          <View
            style={[
              styles.innerCircle,
              sizeStyles.innerCircle,
              { backgroundColor: checkedColor },
            ]}
          />
        )}
      </View>
      <Text style={[styles.label, { color: labelColor }]}>{label}</Text>
    </TouchableOpacity>
  );
};

// Rest of the code remains the same

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  outerCircle: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  innerCircle: {
    height: 12,
    width: 12,
    borderRadius: 6,
  },
  label: {
    fontSize: 16,
  },
});

export default RadioButton;
