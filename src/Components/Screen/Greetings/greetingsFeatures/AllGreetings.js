import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../style';
import ReuseableDatePicker from '../../../ReusableCom/ReuseableDatePicker';

const AllGreetings = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <View>
      <ReuseableDatePicker
        label="Select a Date"
        value={selectedDate}
        onChange={handleDateChange}
        minimumDate={new Date(2021, 0, 1)}
        maximumDate={new Date(2023, 11, 31)}
        mode="date"
      />
    </View>
  );
};

export default AllGreetings;

const styles = StyleSheet.create({});
