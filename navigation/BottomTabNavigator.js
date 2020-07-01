import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import VirusTestScreen from '../screens/VirusTestScreen';
import StatsScreen from '../screens/StatsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Start',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />,
        }}
      />
      <BottomTab.Screen
        name="VirusTest"
        component={VirusTestScreen}
        options={{
          title: 'Test',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-star" />,
        }}
      />
      <BottomTab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          title: 'Statystyki',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-stats" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'CoronaInfo';
    case 'VirusTest':
      return 'Test';
    case 'Stats':
      return 'Statystyki';
  }
}
