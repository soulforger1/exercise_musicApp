import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {MusicPlate} from '../assets';
const {width} = Dimensions.get('window');

export const BrowseHeader = () => {
  return (
    <View style={styles.container}>
      <MusicPlate height={36} width={36} />
      <Text style={styles.title}>Browse</Text>
      <View style={styles.line}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    marginTop: 50,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 42,
    fontWeight: '700',
    color: 'white',
  },
  line: {
    marginTop: 40,
    backgroundColor: 'grey',
    width: width * 0.9,
    height: 1,
    opacity: 0.4
  },
});
