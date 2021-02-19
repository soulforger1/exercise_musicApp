import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
const {width} = Dimensions.get('window');

interface Props {
  title: string;
  image: string;
  artist: string;
  others?: any;
}

export const TrackCard: React.FC<Props> = ({
  title,
  image,
  artist,
  ...others
}) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.poster} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    height: 80,
    flexDirection: 'row',
  },
  poster: {
    height: 60,
    width: 60,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  artist: {
    marginTop: 5,
    fontSize: 14,
    color: 'white',
    opacity: 0.6,
  },
  textContainer: {
    height: 60,
    justifyContent: 'center',
    marginLeft: 20,
  },
});
