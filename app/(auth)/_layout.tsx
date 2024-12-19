import { useFonts } from 'expo-font';
import { Slot, Stack, Tabs } from 'expo-router';
import React, { useEffect } from 'react';

export default function TabLayout() {
  const [loaded] = useFonts({
    SFProRounded: require('../../assets/fonts/SF-Pro-Rounded-Regular.otf'),
  });
  useEffect(() => {
    if (loaded) {
      
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name='signin' options={{headerShown:false}}/>
      <Stack.Screen name='signup' options={{headerShown:false}}/>
      <Stack.Screen name='confirmuser' options={{headerShown:false}}/>
      <Stack.Screen name='authscreen' options={{headerShown:false}}/>
    </Stack>
  );
}