import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MusicIcon, ReviewIcon} from '../assets';
import {AlbumCard, BrowseHeader, Data, TrackCard} from '../components';
const {width} = Dimensions.get('window');

export const Browse: React.FC<any> = (props) => {
  return (
    <View style={styles.container}>
      <BrowseHeader />
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View style={styles.subTitleContainer}>
            <ReviewIcon height={30} width={30} />
            <Text style={styles.subTitleText}>Reviews</Text>
          </View>
          <FlatList
            data={Data.albums}
            keyExtractor={(item) => item.id}
            style={{marginTop: 30, paddingLeft: 20}}
            renderItem={({item, index}) => (
              <AlbumCard
                image={item.image}
                title={item.title}
                artist={item.artist}
                description={item.description}
                tracks={item.tracks}
                color={item.color}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={styles.horizontalSeperator}></View>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View
          style={[
            styles.line,
            {
              marginTop: 50,
              marginLeft: width * 0.05,
            },
          ]}></View>
        <View style={{alignItems: 'center'}}>
          <View style={[styles.subTitleContainer, {marginTop: 30}]}>
            <MusicIcon height={30} width={30} />
            <Text style={[styles.subTitleText, {marginLeft: 10}]}>
              Hot tracks
            </Text>
          </View>
          <FlatList
            style={{marginTop: 20}}
            data={Data.tracks}
            keyExtractor={(item) => item.id}
            renderItem={({item, index}) => (
              <TrackCard
                title={item.title}
                image={item.image}
                artist={item.artist}
                {...props}
              />
            )}
            ItemSeparatorComponent={() => (
              <View
                style={[
                  styles.line,
                  {marginBottom: 10, marginTop: -10},
                ]}></View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28282B',
    alignItems: 'center',
  },
  subTitleContainer: {
    marginTop: 50,
    flexDirection: 'row',
    width: width * 0.9,
    alignItems: 'center',
  },
  subTitleText: {
    fontSize: 20,
    fontWeight: '800',
    marginLeft: 5,
    color: 'white',
  },
  horizontalSeperator: {
    width: 20,
  },
  line: {
    backgroundColor: 'grey',
    width: width * 0.9,
    height: 1,
    opacity: 0.4,
  },
});
