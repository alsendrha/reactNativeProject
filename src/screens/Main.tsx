import {Button, Text, View} from 'react-native';
import React from 'react';

const Main = ({navigation}: any) => {
  return (
    <View className="w-full h-[200px] border flex items-center justify-center">
      <Text className="">Main</Text>
      <View>
        <Button
          title="버튼"
          onPress={() => navigation.navigate('MyPage')}></Button>
      </View>
    </View>
  );
};

export default Main;
