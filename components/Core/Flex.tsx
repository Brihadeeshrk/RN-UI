import React from "react";
import { View } from "react-native";
import cn from "classnames";

type FlexProps = {
  p?: number;
  border?: string;
  children: React.ReactNode;
};

const Flex: React.FC<FlexProps> = ({ p, border, children }) => {
  return (
    <View
      className={cn({
        [`p-${p}`]: p,
        [`${border}`]: border,
      })}
    >
      {children}
    </View>
  );
};
export default Flex;
