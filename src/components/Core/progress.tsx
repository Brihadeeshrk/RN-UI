import React, { useState } from "react";
import { View, Text } from "react-native";
import classNames from "classnames";

type ProgressBarProps = {
  min: number;
  max: number;
  progress: number;
};

 const ProgressBar: React.FC<ProgressBarProps> = ({ min, max, progress }) => {
  const [value, setValue] = useState(progress);

  const progressClasses = classNames(
    "w-full",
    "bg-gray-200",
    "h-4",
    "rounded",
    "overflow-hidden",
    "mt-4"
  );

  const progressBarClasses = classNames(
    "h-full",
    "bg-blue-500"
  );

  return (
    <View>
      <View className={progressClasses}>
        <View
          className={progressBarClasses}
          style={{ width: `${((value - min) / (max - min)) * 100}%` }}
        ></View>
      </View>
      <Text className="mt-2 text-center">{value}</Text>
    </View>
  );
};

export default ProgressBar;