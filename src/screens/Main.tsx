import {Button, Text, View} from 'react-native';
import React, {useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import MyBottomSheet from '../components/MyBottomSheet';
import TestComp from '../components/TestComp';

const Main = ({navigation}: any) => {
  const asd = '아아아';
  return (
    <View>
      <View className="w-full h-[200px] border flex items-center justify-center">
        <Text className="">Main</Text>
        <Button
          title="버튼"
          onPress={() => navigation.navigate('MyPage')}></Button>
        <Button title="버튼"></Button>
      </View>
      <View className="mt-5 border h-[200px] flex items-center justify-center">
        <Text>두번째</Text>
        <Button title="버튼튼" />
      </View>
      <TestComp asd={asd} />
    </View>
  );
};

export default Main;
