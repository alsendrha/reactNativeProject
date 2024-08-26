import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Detail = ({route}: any) => {
  console.log(route.params.data);
  const nav = useNavigation();
  const data = route.params.data;
  return (
    <View>
      <TouchableOpacity onPress={() => nav.goBack()}>
        <Text>뒤로가기</Text>
      </TouchableOpacity>
      <Text>{data.title}</Text>
      <Text>{data.address}</Text>
      <Image
        source={{uri: data.repPhoto.photoid.imgpath}}
        className="w-full h-[300px] object-cover"
        alt="이미지"
      />
    </View>
  );
};

export default Detail;
