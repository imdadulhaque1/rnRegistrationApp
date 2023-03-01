import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInputField from '../../../ReusableCom/InputFields/CustomInputField';
import Button from '../../../ReusableCom/Button';
import CustomizedSummernote from '../../../ReusableCom/InputFields/CustomizedSummernote';
import {Colors} from '../../../style';

// placeholderText,
// placeholderTextColor,
// value,
// onChangeText,

const CreateGreetings = () => {
  const [title, setTitle] = useState('');
  const [summernoteValues, setSummernoteValues] = useState('');
  const handleSubmitForm = () => {
    Alert.alert(summernoteValues);
  };
  return (
    <View style={styles.greetingsContainer}>
      <CustomInputField
        placeholderText="Hello Another"
        placeholderTextColor="red"
        value={title}
        onChangeText={value => {
          setTitle(value);
        }}
      />
      <View style={styles.summernoteViewStyles}>
        <CustomizedSummernote
          summernotesValues={summernoteValues}
          summernotesOnChangeText={value => {
            setSummernoteValues(value);
          }}
        />
      </View>
      <Button btnTitle="SUBMIT" onPress={() => handleSubmitForm()} />
    </View>
  );
};

export default CreateGreetings;

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  greetingsContainer: {
    width: width,
    height: height,
  },
  summernoteViewStyles: {
    height: 150,
    borderColor: Colors.btnBorderColor,
    backgroundColor: Colors.grayColor,
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  summernoteStyles: {
    backgroundColor: Colors.RED,
    marginTop: -100,
  },
});
