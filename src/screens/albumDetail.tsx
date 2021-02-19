import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {PlayerIcon} from '../assets';
import {AlbumDetailHeader} from '../components';
const {width} = Dimensions.get('window');

interface Props {
  title?: string;
  description?: string;
  image?: string;
  artist?: string;
  others?: any;
}

export const AlbumDetail: React.FC<any> = (prop) => {
  const {title, description, image, artist, ...others} = prop.route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AlbumDetailHeader />
      <ScrollView>
        <SharedElement id={`album-${title}`}>
          <Image source={{uri: image}} style={styles.poster} />
        </SharedElement>
        <View>
          <View
            style={{
              flexDirection: 'row',
              width: 350,
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.artist}>{artist}</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('tracksDetail', {...prop.route.params})}>
              <PlayerIcon height={60} width={60} />
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    backgroundColor: '#28282B',
  },
  poster: {
    height: 350,
    width: 350,
    borderRadius: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    color: 'white',
  },
  artist: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5,
    color: 'white',
    opacity: 0.7,
  },
  description: {
    marginTop: 30,
    lineHeight: 25,
    width: 350,
    fontSize: 18,
    color: 'white',
    opacity: 0.6,
  },
});
