import React from 'react';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';
const animation = require('../assets/musicAnimation.json');

export const SplashScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#28282B'}}>
      <LottieView
        source={animation}
        autoPlay
        loop={false}
        onAnimationFinish={() => {
          navigation.navigate('main');
        }}
      />
    </View>
  );
};
