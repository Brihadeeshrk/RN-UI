// Card.tsx
import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet } from "react-native";
import cn from "classnames";

export interface CardProps {
  title?: string;
  children?: React.ReactNode;
  onCardPress?: () => void;
  headingBackgroundColor?: string;
  headerTextColor?: string;
  width?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  onCardPress = () => {},
  headingBackgroundColor = "bg-white",
  headerTextColor = "text-black",
  width = "w-full",
}) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: "white",
      borderRadius: 8,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
      margin: 10,
    },
  });

  return (
    <TouchableWithoutFeedback onPress={onCardPress}>
      <View className={cn(` rounded-lg  m-2.5 ${width}`)} style={styles.card}>
        <View
          className={cn(
            `rounded-t-lg p-2.5 justify-center items-center ${headingBackgroundColor}`
          )}
        >
          {title && (
            <Text className={cn(`text-lg font-bold mb-1.5 ${headerTextColor}`)}>
              {title}
            </Text>
          )}
        </View>
        <View className="p-2.5">{children}</View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;

//  <Card
//    title="Card Title"
//    headingBackgroundColor="bg-[#AC7D88]"
//    width="w-[200]"
//    headerTextColor="text-[#fff]"
//  >
//   inside content goes here
// eg: <View>
//     <Text>something</Text>
// </View>
//  </Card>;
