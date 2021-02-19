import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';

interface Props {
  image: string;
  title: string;
  artist: string;
  description: string;
  tracks: object;
  color: string;
  others?: any;
}

export const AlbumCard: React.FC<Props> = (prop) => {
  const {image, title, artist, description, ...others} = prop;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('albumDetail', {...prop})}>
      <View style={styles.container}>
        <SharedElement id={`album-${title}`}>
          <Image source={{uri: image}} style={styles.image} />
        </SharedElement>
        <View style={{width: 170, justifyContent: 'center', height: 70}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.artist}>{artist}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 180,
  },
  image: {
    height: 180,
    width: 180,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    marginBottom: 5,
  },
  artist: {
    fontSize: 14,
    fontWeight: '500',
    color: 'white',
    opacity: 0.6,
  },
});
