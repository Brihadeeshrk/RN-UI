import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

type CalendarProps = {};

export const Calendar: React.FC<CalendarProps> = () => {
  const [date, setDate] = React.useState(new Date());
  const [showPicker, setShowPicker] = React.useState(false);

  const handleDateChange = (event: any, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || date;
    setShowPicker(false);
    setDate(currentDate);
  };

  const handleShowPicker = () => {
    setShowPicker(true);
  };

  return (
    <View>
      <TouchableOpacity className={"p-4"} onPress={handleShowPicker}>
        <Text>{date.toLocaleString()}</Text>
      </TouchableOpacity>
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="datetime"
          //   is24Hour={true}
          display="default"
          onChange={handleDateChange}
        />
      )}
    </View>
  );
};
