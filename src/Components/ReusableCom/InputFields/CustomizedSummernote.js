import {View, SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import React, {useState} from 'react';
import QuillEditor, {QuillToolbar} from 'react-native-cn-quill';
import {Colors} from '../../style';

const CustomizedSummernote = ({summernotesValues, summernotesOnChangeText}) => {
  const _editor = React.createRef();
  const handleContentChange = html => {
    setContent(html);
  };
  return (
    <View style={styles.root}>
      <QuillEditor
        ref={_editor}
        initialHtml="<p>Write Your Descriptions.......</p>"
        value={summernotesValues}
        onChangeText={handleContentChange}
      />
      <QuillToolbar editor={_editor} options="full" theme="light" />
    </View>
  );
};

export default CustomizedSummernote;

const styles = StyleSheet.create({
  root: {
    height: '100%',
  },
});
