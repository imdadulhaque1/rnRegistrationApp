import {Alert, Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomInputField from '../../../ReusableCom/InputFields/CustomInputField';
import Button from '../../../ReusableCom/Button';
import CustomizedSummernote from '../../../ReusableCom/InputFields/CustomizedSummernote';
import {Colors} from '../../../style';
import ReuseableImageUploadBtn from '../../../ReusableCom/ReuseableImageUploadBtn';
import ReuseableDatePicker from '../../../ReusableCom/ReuseableDatePicker';

const CreateGreetings = () => {
  const [title, setTitle] = useState('');
  const [summernoteValues, setSummernoteValues] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const handleSubmitForm = summernoteTexts => {
    setSummernoteValues(summernoteTexts);
    Alert.alert(title);
  };
  const handleImageSelected = imageData => {
    setSelectedImage(imageData);
  };
  console.log(summernoteValues);

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
          value={summernoteValues}
          onChangeText={value => setSummernoteValues(value)}
        />
      </View>
      <View>
        <ReuseableImageUploadBtn onImageSelected={handleImageSelected} />
      </View>
      <View style={styles.dateBtnCustomizedStyle}>
        <ReuseableDatePicker dateBtnTitle="START" />
        <ReuseableDatePicker dateBtnTitle="END" />
      </View>
      <Button btnTitle="SUBMIT" onPress={() => handleSubmitForm()} />
    </View>
  );
};

export default CreateGreetings;

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  greetingsContainer: {
    flex: 1,
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
  dateBtnCustomizedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
