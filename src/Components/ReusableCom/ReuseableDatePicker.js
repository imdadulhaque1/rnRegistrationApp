// import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import React, {useState} from 'react';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import {Colors} from '../style';

// const ReuseableDatePicker = ({
//   label,
//   value,
//   onChange,
//   minimumDate,
//   maximumDate,
//   mode,
// }) => {
//   const [showPicker, setShowPicker] = useState(false);

//   const handleShowPicker = () => {
//     setShowPicker(true);
//   };

//   const handleHidePicker = () => {
//     setShowPicker(false);
//   };

//   const handleDateChange = (event, selectedDate) => {
//     if (Platform.OS === 'ios') {
//       setShowPicker(false);
//     }
//     onChange(selectedDate);
//   };
//   return (
//     <View>
//       <TouchableOpacity onPress={handleShowPicker}>
//         <Text style={{color: Colors.BLACK}}>{label}</Text>
//         <Text style={{color: Colors.BLACK}}>{value.toLocaleDateString()}</Text>
//       </TouchableOpacity>
//       {showPicker && (
//         <DateTimePicker
//           value={value}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//           minimumDate={minimumDate}
//           maximumDate={new Date()}
//         />
//       )}
//     </View>
//   );
// };

// export default ReuseableDatePicker;

// const styles = StyleSheet.create({});

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DatePicker from 'react-native-date-picker';

const ReuseableDatePicker = () => {
  return (
    <>
      <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default ReuseableDatePicker;

const styles = StyleSheet.create({});
