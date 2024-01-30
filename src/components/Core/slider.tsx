import React, { useState } from "react";
import { View, Text } from "react-native";
import classNames from "classnames";

type SliderProps = {
  min: number;
  max: number;
};

 const Slider: React.FC<SliderProps> = ({ min, max }) => {
  const [value, setValue] = useState(min);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  const sliderClasses = classNames(
    "w-full",
    "bg-gray-200",
    "h-2",
    "rounded",
    "overflow-hidden",
    "mt-4"
  );

  const thumbClasses = classNames(
    "w-6",
    "h-6",
    "bg-white",
    "border",
    "border-gray-300",
    "rounded-full",
    "shadow",
    "absolute",
    "top-0"
  );

  return (
    <View>
      <View className={sliderClasses}>
        <View
          className="h-full bg-blue-500"
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        >
          <View
            className={thumbClasses}
            style={{
              left: `${((value - min) / (max - min)) * 100}%`,
              marginLeft: -3,
              marginTop: -2,
            }}
          ></View>
        </View>
      </View>
      <Text className="mt-2 text-center">{value}</Text>
    </View>
  );
};

export default Slider;