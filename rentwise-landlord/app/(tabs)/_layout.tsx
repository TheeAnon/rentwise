import { Tabs } from 'expo-router';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

import { Colors } from '@/constants/Colors';

export default function TabLayout() {

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarStyle: {
          backgroundColor: '#B1D8B7',
          borderColor: "#000",
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Feather size={24} name='home' />
          ),
        }}
      />
    </Tabs>
  );
}
