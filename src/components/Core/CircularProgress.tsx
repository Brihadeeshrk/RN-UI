import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

interface CircularProgressProps {
  radius: number;
  strokeWidth: number;
  progress: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({ radius, strokeWidth, progress }) => {
  const circumference = 2 * Math.PI * radius;
  const progressStrokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg width={radius * 2} height={radius * 2}>
        <Circle
          stroke="#E6E6E6"
          fill="none"
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
        />
        <Circle
          stroke="#7E22CE"
          fill="none"
          cx={radius}
          cy={radius}
          r={radius - strokeWidth / 2}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progressStrokeDashoffset}
          strokeLinecap="round"
        />
      </Svg>
      <Text style={styles.text}>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default CircularProgress;