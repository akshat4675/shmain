import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { SplashScreen, Stack} from 'expo-router';
import { useFonts } from 'expo-font';

const RootLayout = () => {

  const [loaded] = useFonts({
    SFProRounded: require('../assets/fonts/SF-Pro-Rounded-Regular.otf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return(
     <Stack >
      <Stack.Screen name="index" options={{headerShown:false}} ></Stack.Screen>
      <Stack.Screen name="(tabs)" options={{headerShown:false}} ></Stack.Screen>
      <Stack.Screen name="(auth)" options={{headerShown:false}} ></Stack.Screen>
     </Stack>
  )
}

export default RootLayout
