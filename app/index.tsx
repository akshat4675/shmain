import {  router } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StatusBar, Button, ActivityIndicator,Text, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { isAuthenticated } from "./(auth)/cognito";
import { Image } from "expo-image";

export default function index() {

  const [isLoading, setIsLoading] = useState(true);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await isAuthenticated();
      setIsUserAuthenticated(authStatus);
      if(isUserAuthenticated)
      {
        router.replace('/(tabs)/home')
      }
      else
      {
      router.navigate('/(auth)/authscreen')
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);


  if (isLoading) {
    return (
      <>
      <StatusBar
        hidden={false} // Ensure the status bar is not hidden
        translucent={true} // Allow content to flow behind the status bar
        backgroundColor="transparent" // Adjust the background color if needed
        barStyle="light-content" // Adjust the text style for visibility
      />
      <SafeAreaView style={{ flex: 1, justifyContent: 'center',alignItems: 'center', backgroundColor:"black"}}>
      <View>
      <Text style={styles.social}>SOCIAL{"\n"}<Text style={styles.hub}>HUB <Image source={require('../assets/images/img.png')} style={{width:40,height:40}} /></Text></Text>
      </View>         
      </SafeAreaView>
      </>
      
    );
  }
  
  return (
    <>
    <StatusBar
        hidden={false} // Ensure the status bar is not hidden
        translucent={true} // Allow content to flow behind the status bar
        backgroundColor="transparent" // Adjust the background color if needed
        barStyle="dark-content" // Adjust the text style for visibility
      />
    <SafeAreaView>
    </SafeAreaView>
    </>
  );
}



const styles = StyleSheet.create({
 
  social:{
    color:"white",
    fontSize: 48,
    fontFamily: "SFProRounded",
  },
  hub:
  {
    color:"rgba(234, 75, 26, 1)",
    fontSize: 48,
    fontFamily: "SFProRounded",
  }

})
