import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import cn from "classnames";

export interface DropdownProps {
  selectedValue: string;
  onValueChange: (itemValue: string, itemIndex: number) => void;
  items: { label: string; value: string }[];
  style?: any;
  itemStyle?: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  selectedValue,
  onValueChange,
  items,
  style,
  itemStyle,
}) => {
  return (
    <View className={cn("border  rounded", style)}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        className={cn("flex-1", itemStyle)}
      >
        {items.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

export default Dropdown;
