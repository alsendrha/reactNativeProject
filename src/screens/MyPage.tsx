import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const MyPage = () => {
  const [data, setData] = useState([]);
  const nav = useNavigation<any>();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(
      'https://api.visitjeju.net/vsjApi/contents/searchList?apiKey=8mbfp3rur332azyf&locale=kr&category=c1&page=1',
    );
    console.log(response.data.items);
    setData(response.data.items);
  };

  return (
    <View className="px-2">
      <ScrollView>
        {data.map((item: any) => (
          <TouchableOpacity
            activeOpacity={1}
            key={item.contentsid}
            onPress={() => nav.navigate('Detail', {data: item})}>
            <View className="w-full h-[200px] border mb-3 rounded-lg">
              <Text>{item.title}</Text>
              <Image
                source={{uri: item.repPhoto.photoid.imgpath}}
                className="w-full h-[150px] object-cover"
                alt="이미지"
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default MyPage;
