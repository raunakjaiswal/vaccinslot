/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons,Entypo,EvilIcons,MaterialCommunityIcons,FontAwesome5, Fontisto } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import HomeScreen from '../screens/HomeScreen';
import Showresultscreen from '../screens/Showresultscreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="vaccine"
        component={TabOneNavigator}
        options={{
          // tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
          tabBarIcon: ({ color }) => <Fontisto name = "injection-syringe" size={30}  style={{ marginBottom: -3 }} color={color}/>,
        }}
      />
      <BottomTab.Screen
        name="info"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name = "info" size={30}  style={{ marginBottom: -3 }} color={color}/>,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
// function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
//   return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
// }

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator  screenOptions={{ headerTitleAlign: "center" }}>
      <TabOneStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerTitle: 'vaccine-availability-checker' }}
      />
        <TabOneStack.Screen
        name="Showresultscreen"
        component={Showresultscreen}
        options={{ headerTitle: '7 days Details ' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {

  return (

    <TabTwoStack.Navigator  screenOptions={{ headerTitleAlign: "center" }}>
    
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'App Info ' }}

      />
    </TabTwoStack.Navigator>
  );
}
