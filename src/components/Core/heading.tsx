import React from "react";
import { Text, StyleSheet } from "react-native";
import cn from "classnames";

type HeadingProps = {
  text: string;
};

const Heading: React.FC<HeadingProps> = ({ text }) => {
  const headingClasses = cn("text-2xl", "font-bold", "mb-4", "text-center");

  return <Text className={headingClasses}>{text}</Text>;
};

export default Heading;
