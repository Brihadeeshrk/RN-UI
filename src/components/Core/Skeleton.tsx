import React from "react";
import { View, Animated } from "react-native";

type SkeletonProps = {
  height: number;
  width: number;
};

export const Skeleton: React.FC<SkeletonProps> = ({ height, width }) => {
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0.5, 1],
  });

  return (
    <View style={{ height, width }}>
      <Animated.View
        className="rounded-lg"
        style={{
          flex: 1,
          backgroundColor: "#a9a9a9",
          opacity,
        }}
      />
    </View>
  );
};
