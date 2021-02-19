import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {BackIcon, MusicPlate, PlusIcon} from '../assets';
const {width} = Dimensions.get('window');

export const AlbumDetailHeader = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <BackIcon height={30} width={30} color="white" />
      </Pressable>
      <View style={{alignItems: 'center', marginTop: 30}}>
        <MusicPlate height={30} width={30} />
        <Text style={styles.title}>Faces</Text>
      </View>
      <PlusIcon height={30} width={30} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginBottom: 20,
    width: width * 0.9,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: 'white',
  },
});
