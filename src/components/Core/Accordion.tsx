import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
};

export const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [expanded, setExpanded] = React.useState(false);
  const [height, setHeight] = React.useState(0);
  const animatedHeight = React.useRef(new Animated.Value(0)).current;

  const toggleAccordion = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpanded(!expanded);
  };

  React.useEffect(() => {
    Animated.timing(animatedHeight, {
      toValue: expanded ? height : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [expanded]);

  const handleLayout = (event: any) => {
    setHeight(event.nativeEvent.layout.height);
  };

  const arrowIcon = expanded ? "up" : "down";

  return (
    <View className={"border-b border-gray-300"}>
      <TouchableOpacity
        className={"flex-row items-center justify-between p-4"}
        onPress={toggleAccordion}
        onLayout={handleLayout}
      >
        <Text className={"text-lg font-bold"}>{title}</Text>
        <AntDesign name={arrowIcon} size={24} color="black" />
      </TouchableOpacity>
      <Animated.View style={{ height: animatedHeight }}>
        {expanded && <View className={"p-4"}>{children}</View>}
      </Animated.View>
    </View>
  );
};
