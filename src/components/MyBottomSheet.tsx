import React, {useRef, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
const MyBottomSheet = () => {
  const [snapPoints, setSnapPoints] = useState(['25%', '50%', '100%']);

  return (
    <BottomSheet
      // ref={bottomSheetRef}
      index={-1} // 초기에는 닫힌 상태
      snapPoints={snapPoints}
      onChange={index => console.log('Bottom Sheet Index:', index)}>
      <View>
        <Text>Bottom Sheet Content</Text>
        <Button title="Close" />
      </View>
    </BottomSheet>
  );
};

export default MyBottomSheet;
