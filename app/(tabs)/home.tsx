import React, { useEffect, useState } from "react";
import MapView from 'react-native-maps';
import { StyleSheet, View,Text, Alert, Button, ActivityIndicator } from 'react-native';
import { isAuthenticated } from "../(auth)/cognito";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MainScreen(){
        
  const [isLoading, setIsLoading] = useState(true);
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authStatus = await isAuthenticated();
      setIsUserAuthenticated(authStatus);
      if(!isUserAuthenticated)
      {
        router.replace('/(auth)/authscreen')
      }
      
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  function checka(){

   const logout = async () => {
      await AsyncStorage.removeItem('authToken');
    };
    
  }

    return(
      <>
      <View style={styles.container}>
      <Text>Hello</Text>
      <Button title="LogOut" onPress={checka}/>
    </View>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

