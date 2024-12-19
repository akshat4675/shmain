import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Image} from "expo-image";
import { router } from 'expo-router';

const Authscreen = () => {
  return (
    <>
    <StatusBar
    barStyle="light-content"
    />
    <SafeAreaView style={styles.screen}>
     <View>
           <Text style={styles.social}>SOCIAL{"\n"}<Text style={styles.hub}>HUB <Image source={require("@/assets/images/img.png")} style={{width:40,height:40}} /></Text></Text>
     </View>
    <View style={styles.authoptions}>
      <TouchableOpacity style={styles.loginb} onPress={()=>(router.replace('/(auth)/signin'))}>
        <Text style={styles.logintext}>LogIn</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupb} onPress={()=>(router.replace('/(auth)/signup'))}>
        <Text style={styles.signuptext}>Sign Up</Text>
      </TouchableOpacity>
    </View>  
    </SafeAreaView>
    </>
  )
}

export default Authscreen

const styles = StyleSheet.create({

  screen:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black"
    },
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
    },
  authoptions:{
    flexDirection:"row",
    justifyContent: 'center',
    alignItems: 'center',
    top:"20%",
    gap:15
  },
  loginb:{
    backgroundColor: "#ed3921",
    borderRadius:10,
    overflow: "hidden",
    height: 52,
    width: 133,
  },
  signupb:{
    backgroundColor: "black",
    borderRadius:10,
    borderWidth: 2,
    borderColor: "#ed3921",
    borderStyle: "solid",
    overflow: "hidden",
    height: 52,
    width: 133,
  },
  logintext:{position: "absolute",fontSize: 20,
    fontWeight: "500",
    fontFamily: "SF Pro Rounded",
    color: "#fff",
    top:"20%",
    left:"30%"
    },
    signuptext:{position: "absolute",fontSize: 20,
      fontWeight: "500",
      fontFamily: "SF Pro Rounded",
      color: "#fff",
      top:"18%",
      left:"23%"
      },

})