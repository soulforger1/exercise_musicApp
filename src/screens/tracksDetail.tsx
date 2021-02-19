import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SharedElement} from 'react-navigation-shared-element';
import {BackIcon, DotsIcon} from '../assets';
const {width} = Dimensions.get('window');

const tracksCard = (index: number, title: string) => {
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{fontSize: 16, color: 'white', fontWeight: '600', width: 20}}>
          {index + 1}
        </Text>
        <Text
          style={{
            marginLeft: 40,
            fontSize: 15,
            color: 'white',
            fontWeight: '600',
            opacity: 0.8,
          }}>
          {title}
        </Text>
      </View>
      <DotsIcon width={20} height={20} />
    </View>
  );
};

export const TracksDetail: React.FC<any> = (prop) => {
  const {title, image, artist, tracks, color, ...others} = prop.route.params;
  const navigation = useNavigation();
  return (
    <View style={[styles.container, {backgroundColor: color}]}>
      <SharedElement id={`album-${title}`} style={{zIndex: 0}}>
        <Image source={{uri: image}} style={styles.poster} />
      </SharedElement>
      <View
        style={{
          marginTop: 60,
          marginLeft: 20,
          zIndex: 2,
          position: 'absolute',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <BackIcon height={30} width={30} color="white" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 100,
          width: width,
          justifyContent: 'center',
          paddingLeft: 30,
        }}>
        <Text style={{fontSize: 27, color: 'white', fontWeight: '700'}}>
          {title}
        </Text>
        <Text
          style={{
            fontSize: 19,
            color: 'white',
            fontWeight: '500',
            opacity: 0.7,
          }}>
          {artist}
        </Text>
      </View>
      <FlatList
        data={tracks}
        contentContainerStyle={{alignItems: 'center'}}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => tracksCard(index, item.title)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  poster: {
    width: width,
    height: width,
  },
  card: {
    height: 50,
    width: width * 0.85,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
