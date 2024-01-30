import React from 'react';
import { Text, StyleSheet } from 'react-native';
import classNames from 'classnames/native';

type HeadingProps = {
  text: string;
};

const Heading: React.FC<HeadingProps> = ({ text }) => {
  const headingClasses = classNames('text-2xl', 'font-bold', 'mb-4', 'text-center');

  return (
    <Text style={styles(headingClasses).heading}>{text}</Text>
  );
};

const styles = (headingClasses: string) => StyleSheet.create({
  heading: {
    ...headingClasses,
  },
});

export default Heading;
