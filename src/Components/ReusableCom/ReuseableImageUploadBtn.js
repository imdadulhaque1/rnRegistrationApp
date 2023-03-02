// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import RNFetchBlob from 'rn-fetch-blob';

// const AllGreetings = () => {
//   return (
//     <View>
//       <Text>AllGreetings</Text>
//     </View>
//   );
// };

// export default AllGreetings;

// const styles = StyleSheet.create({});

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {Colors} from '../style';

const ReuseableImageUploadBtn = ({onImageSelected}) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSelectImage = () => {
    ImagePicker.openPicker({
      cropping: true,
      includeBase64: true,
      maxHeight: 1000,
      maxWidth: 1000,
    })
      .then(image => {
        setSelectedImage(`data:${image.mime};base64,${image.data}`);
        onImageSelected(`data:${image.mime};base64,${image.data}`);
        console.log(image);
      })
      .catch(err => console.log(err));
  };

  const handleUploadImage = () => {
    // TODO: Upload selectedImage to server
  };

  return (
    <View style={styles.imageViewContainer}>
      <TouchableOpacity
        onPress={handleSelectImage}
        style={styles.imageBtnStyle}>
        <Text style={styles.btnTextStyle}>Image Upload</Text>
      </TouchableOpacity>
      <View style={styles.uploadedImageStyle}>
        {selectedImage ? (
          <Image
            style={{width: '100%', height: 40, borderRadius: 10}}
            source={{uri: selectedImage}}
          />
        ) : (
          <View style={styles.imageContainer}>
            <Text style={styles.noImageStyle}>No Image</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ReuseableImageUploadBtn;
const styles = StyleSheet.create({
  imageViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
  },
  imageBtnStyle: {
    width: '75%',
    backgroundColor: Colors.grayColor,
    paddingVertical: 7,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
  },
  uploadedImageStyle: {
    width: '20%',
    marginLeft: 5,
    backgroundColor: Colors.grayColor,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noImageStyle: {
    fontFamily: 'Aladin-Regular',
    fontSize: 18,
    color: Colors.BLACK,
  },
  btnTextStyle: {
    fontSize: 20,
    color: Colors.BLACK,
    textAlign: 'center',
    fontFamily: 'Aladin-Regular',
  },
});
