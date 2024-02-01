import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Slider from '@react-native-community/slider';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  onValueChange: (value: number) => void;
}

const CustomSlider: React.FC<SliderProps> = ({ min, max, step = 1, onValueChange }) => {
  const [sliderValue, setSliderValue] = useState(min);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
    onValueChange(value);
  };

  return (
    <View style={{ marginVertical: 10 }}>
      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Slider</Text>
      <Slider
        style={{ width: '100%', height: 40 }}
        minimumValue={min}
        maximumValue={max}
        minimumTrackTintColor="#007AFF"
        maximumTrackTintColor="#000000"
        step={step}
        value={sliderValue}
        onValueChange={handleSliderChange}
      />
      <Text style={{ textAlign: 'center' }}>Value: {sliderValue}</Text>
    </View>
  );
};

export default CustomSlider;