import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {AlbumDetail, SplashScreen, TracksDetail} from '../screens';
import {BottomNavigation} from './bottomNavigation';

const Stack = createSharedElementStackNavigator();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({current: {progress}}: any) => {
    return {
      cardStyle: {
        opacity: progress,
      },
    };
  },
};

export const MainNavigation: React.FC<any> = () => {
  return (
    <Stack.Navigator headerMode="none" screenOptions={options}>
      <Stack.Screen
        name="splashScreen"
        component={SplashScreen}
        options={options}
      />
      <Stack.Screen name="main" component={BottomNavigation} />
      <Stack.Screen
        name="tracksDetail"
        component={TracksDetail}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const {title} = route.params;
          return [
            {
              id: `album-${title}`,
              animation: 'move',
              //   resize: 'clip'
              //   align: 'left-top'
            },
          ];
        }}
      />
      <Stack.Screen
        name="albumDetail"
        component={AlbumDetail}
        options={options}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const {title} = route.params;
          return [
            {
              id: `album-${title}`,
              animation: 'move',
              //   resize: 'clip'
              //   align: 'left-top'
            },
          ];
        }}
      />
      {/* <Stack.Screen
        name="albumDetail"
        component={AlbumDetail}
        sharedElementsConfig={(route, otherRoute, showing) => {
          const {title} = route.params;
          return [
            {
              id: `album-${title}`,
              animation: 'move',
              //   resize: 'clip'
              //   align: 'left-top'
            },
          ];
        }}
      /> */}
    </Stack.Navigator>
  );
};
