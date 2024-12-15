import {Tabs } from "expo-router";
import React from "react";
import { Image } from "expo-image";
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function RootLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Tabs screenOptions={{
      tabBarStyle: {
      backgroundColor: 'black',
      height:"13%",
      borderColor:"black",
      },
    }} >
      <Tabs.Screen
        name="index"
        options={{
          headerShown:false,
          title:"",
          tabBarIcon: ()=> {
            return(
             <>
             <Image style={{ width: 55, height: 55 ,top:"100%" }}
              contentFit="contain" source={require('@/assets/images/homescreenicon.svg')} />
             </>
            );
          },  
        }}
      />
    </Tabs>
    </GestureHandlerRootView>
  )
}
