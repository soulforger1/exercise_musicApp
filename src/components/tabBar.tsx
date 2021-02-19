import React from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import {AccountIcon, SearchIcon, TrackIcon} from '../assets';
const {width} = Dimensions.get('window');

const ICON_SELECT: any = {
  browse: TrackIcon,
  account: AccountIcon,
  search: SearchIcon,
};

export const TabBar: React.FC<any> = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={[styles.main, {flexDirection: 'row'}]}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;
        const Icon = ICON_SELECT[route.name];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable onPress={onPress} key={route.name}>
            <View
              style={[
                styles.container,
                isFocused ? {opacity: 1} : {opacity: 0.5},
              ]}>
              <Icon color="white" />
              <Text style={{color: 'white', marginTop: 5, marginBottom: 10}}>
                {route.name}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    borderWidth: 1,
    borderTopColor: 'grey',
    backgroundColor: '#28282B',
  },
  container: {
    height: 80,
    width: width * 0.34,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
