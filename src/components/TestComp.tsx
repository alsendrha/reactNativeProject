import {View, Text} from 'react-native';
import React from 'react';

type TestCompProps = {
  asd: string;
};

const TestComp = ({asd}: TestCompProps) => {
  return (
    <View>
      <Text>{asd}</Text>
    </View>
  );
};

export default TestComp;
