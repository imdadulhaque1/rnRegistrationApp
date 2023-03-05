import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Button from './Button';
import {Colors} from '../style';

const ReuseableDatePicker = ({dateBtnTitle}) => {
  const [selectedStartdDate, setSelectedStartDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);

  const handleStartDateChange = (event, date) => {
    setShowStartDatePicker(Platform.OS === 'ios');
    if (date) {
      setSelectedStartDate(date);
    }
  };

  const handleStartDatePress = () => {
    setShowStartDatePicker(true);
    console.log(showStartDatePicker);
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateMainContainer}>
        <TouchableOpacity
          onPress={handleStartDatePress}
          style={styles.dateSelectStyle}>
          <Text style={styles.dateSelectTextStyle}>{dateBtnTitle}</Text>
        </TouchableOpacity>

        {showStartDatePicker && (
          <DateTimePicker
            value={selectedStartdDate}
            mode="date"
            display="default"
            onChange={handleStartDateChange}
            style={styles.datePicker}
          />
        )}
        <TouchableOpacity onPress={handleStartDatePress}>
          <Text style={styles.dateText}>
            {selectedStartdDate.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  datePicker: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
  },
  dateMainContainer: {
    marginHorizontal: 5,
    width: width / 2.2,
    flexDirection: 'row',
    backgroundColor: Colors.grayColor,
    borderRadius: 10,
  },
  dateSelectStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '35%',
    backgroundColor: Colors.grayColor,
    paddingVertical: 0,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
  },
  dateSelectTextStyle: {
    fontSize: 20,
    color: Colors.BLACK,
    textAlign: 'center',
    fontFamily: 'Aladin-Regular',
    marginLeft: 5,
  },
  dateText: {
    marginLeft: 5,
    fontSize: 20,
    marginVertical: 8,
    fontFamily: 'Aladin-Regular',
  },
});

export default ReuseableDatePicker;
