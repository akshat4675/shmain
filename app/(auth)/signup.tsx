import * as React from "react";
import {Text, StyleSheet,ScrollView, View,Button, Pressable,TextInput, Alert, StatusBar} from "react-native";
import { Image } from 'expo-image';
import { useAnimatedKeyboard } from "react-native-reanimated";
import { Link, router, useNavigation } from "expo-router";
import { useState } from "react";
import { confirmUser,signUpUser } from "./cognito";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Signupscreen (){

  
  
  return (
    
    <>
    <StatusBar
        hidden={false} // Ensure the status bar is not hidden
        translucent={true} // Allow content to flow behind the status bar
        backgroundColor="transparent" // Adjust the background color if needed
        barStyle="dark-content" // Adjust the text style for visibility
      />
      <SafeAreaView style={{ flex: 1 }} >
    <ScrollView style={{backgroundColor:"white"}}>
    <View style={[screen.h]}>
    <Header/>
    <View style={screen.u}>
      <Usertype/>
    </View>
    <View style={screen.f}>
    <Form/>    
    </View>
    </View>

    </ScrollView>
    </SafeAreaView>
    </>
  );
}

const screen = StyleSheet.create({

  h : {
    flex: 1,

    width: "auto",
    backgroundColor: "#fff",
    gap:15,
  },

  u : {
    marginTop: "auto",
  },
  f: {
    marginTop: "10%",
    paddingLeft: "15%",
  },
});

const Signupb=()=>{
  return(
    <>
    </>
  );
};

const but = StyleSheet.create({

  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 20,
    fontFamily: "SFProRounded",
  },
  rectangleParent: {
    height: 45,
    width: 133,
    marginLeft:150,
    },
    groupChild: {
      backgroundColor: "#ff6233"
      },
      groupPosition: {
        borderRadius: 100,
        left: "50%",
        top: 0,
        marginLeft: -66.5,
        position: "absolute",
        height: 45,
        width: 133
        },

})

const Header = ()=> {
  return (
    <>
      <View style={[header.rectangleView]}>
      <Text style={header.socialHub}>
       <Text style={header.socialHubTxtContainer}>
        <Text style={header.social}>{`SOCIAL`}{"\n"}</Text>
        <Text style={header.hub}>{`HUB`}</Text>
       </Text>
      </Text>
      <Image style={[header.manWalkingSvgrepocomIcon,{top:-121,left:136}]} source={require('@/assets/images/img.png')} />
      </View>
      
    </>
  )
}

const header = StyleSheet.create({
manWalkingSvgrepocomIcon: {
width: 38,
height: 38,
},
  rectangleView: {
  borderBottomLeftRadius: 25,
  borderBottomRightRadius: 25,
  backgroundColor: "rgba(0, 0, 0, 0.99)",
  width: "100%",
  height: "30%",
  },
  social: {
    color: "#fff"
    },
    hub: {
    color: "#ea4b1a"
    },
    socialHubTxtContainer: {
    width: "100%",
    },
    socialHub: {
    fontSize: 43,
    fontFamily: "SFProRounded",
    textAlign: "left",
    width: 204,
    height: 202,
    marginTop: "10%",
    marginLeft: 40,
    }
  });

const Usertype = () => {

    return (
      <View style={{marginLeft:"15%",top:"30%"}}>
    <View style={useropt.groupParent}>
    <View style={useropt.rectangleParent}>
    <View style={[useropt.groupChild, useropt.groupPosition]} />
    <Pressable style={useropt.button}>
        <Link href={"/"} style={useropt.buttonLabel}>Explorer</Link>
      </Pressable>
    </View>
    <View style={useropt.rectangleParent}>
    <View style={[useropt.groupItem, useropt.groupPosition]} />
    <Text style={[useropt.creator, useropt.creatorTypo]}>Creator</Text>
    </View>
    </View>
    </View>
    );
    };


  const useropt = StyleSheet.create({
      button: {
        borderRadius: 10,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
      },
      buttonLabel: {
        color: '#fff',
        fontSize: 20,
        fontFamily: "SFProRounded",
      },
    groupPosition: {
    borderRadius: 100,
    left: "50%",
    top: 0,
    marginLeft: -66.5,
    position: "absolute",
    height: 45,
    width: 133
    },
    creatorTypo: {
    height: 25,
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontFamily: "SFProRounded",
    fontWeight: "700",
    fontSize: 16,
    top: 10,
    left: "50%",
    position: "absolute",
    alignItems: "center"
    },
    groupChild: {
    backgroundColor: "#ff6233"
    },
    explorer: {
    marginLeft: -41.5,
    color: "#fffbfb",
    width: 84
    },
    rectangleParent: {
    height: 45,
    width: 133
    },
    groupItem: {
    borderStyle: "solid",
    borderColor: "#030303",
    borderWidth: 2
    },
    creator: {
    marginLeft: -37.5,
    color: "#000",
    width: 80
    },
    groupParent: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    gap: 14,
    }
    });
    
    type DialogComponentProps = {};

const Form: React.FunctionComponent<DialogComponentProps> = () => {

  const [email, setEmail] = useState('');
  const [uname, setUname] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmpassword] = useState('');
  const [error, setError] = useState('');



  const handleSignup = () => {
    if (password !== confirmpassword) {
      Alert.alert("Passwords do not match");
      return;
    }

    signUpUser(
      uname,
      email,
      password,
      () => {
        Alert.alert("Sign up successful!", "Please check your email or phone for confirmation.", [
          { text: "OK", onPress: () => router.navigate("/(auth)/confirmuser") },
        ]);
      },
      (err) =>
        {
          Alert.alert("Sign up failed", err.message || "An error occurred")
          if(err.message==='User already exists')
          {
            router.navigate('/(auth)/confirmuser')
          }
        } 
    );
  };
    

  React.useEffect(()=>{



  },[])
 


      return (
        <View style={form.groupParent}>
        <View style={form.rectangleParent}>
        <View style={form.groupChild} />
        <TextInput editable style={form.textInput} placeholder="Name" value={uname} onChangeText={setUname} ></TextInput>
        </View>
        {!email.trim() ?<></> :<></>}
        <View style={form.rectangleParent}>
        <View style={form.groupChild} />
        <TextInput editable style={form.textInput} placeholder="Email @" value={email} onChangeText={setEmail}></TextInput>
        </View>
        <View style={form.rectangleParent}>
        <View style={form.groupChild} />
        <TextInput editable style={form.textInput} placeholder="Ph no." value={phone} onChangeText={setPhone}></TextInput>
        </View>
        <View style={form.rectangleParent}>
        <View style={form.groupChild} />
        <TextInput editable style={form.textInput} placeholder="Password" value={password} secureTextEntry onChangeText={setPassword}></TextInput>
        </View>
        <View style={form.rectangleParent}>
        <View style={form.groupChild} />
        <TextInput editable style={form.textInput} placeholder="Confirm Password" value={confirmpassword} secureTextEntry onChangeText={setConfirmpassword}></TextInput>
        </View>
        <View style={{bottom:40}}>
        <View style={{top:35}}>
        <Pressable style={{top:25}} >
        <Link href={'/(auth)/signin'}><FontAwesome name="apple" size={24} color="black" /></Link> 
        </Pressable> 
        <Pressable style={{left:50 , }} >
        <Link href={'/(auth)/signin'}><FontAwesome name="google" size={24} color="black" /></Link> 
        </Pressable> 
        </View>
        <View style={[but.rectangleParent]}> 
        <View style={[but.groupChild, but.groupPosition]} />
        <Pressable style={but.button} onPress={handleSignup}>
        <Text style={but.buttonLabel}>Sign Up</Text>
        </Pressable>
        <View >
          <Options/>
        </View>
        </View>
        </View>
        </View>
      );
      };


        const form = StyleSheet.create({
        textInput: {
        marginLeft: 12,
        fontSize: 13,
        textAlign: "left",
        color : "black",
        fontFamily: "SFProRounded",
        paddingTop:12,
        },
      nameFlexBox: {
      height: 25,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      textAlign: "center",
      color: "#898989",
      fontFamily: "SFProRounded",
      fontSize: 16,
      top: 10,
      left: "50%",
      position: "absolute"
      },
      passwordPosition: {
      marginLeft: -120.98,
      height: 25,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      textAlign: "center",
      color: "#898989",
      fontFamily: "SFProRounded",
      fontSize: 16,
      left: "50%",
      position: "absolute"
      },
      groupChild: {
      marginLeft: -140.05,
      top: 0,
      borderRadius: 100,
      borderStyle: "solid",
      borderColor: "rgba(0, 0, 0, 0.88)",
      borderWidth: 2,
      left: "50%",
      position: "absolute",
      height: 45,
      width: 280,
      },
      name: {
      width: 51,
      marginLeft: -118.91,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      textAlign: "center",
      color: "#898989",
      fontFamily: "SFProRounded",
      fontSize: 16
      },
      rectangleParent: {
      height: 48,
      width: 280
      },
      eMail: {
      width: 54,
      marginLeft: -118.91,
      justifyContent: "center",
      alignItems: "center",
      display: "flex",
      textAlign: "center",
      color: "#898989",
      fontFamily: "SFProRounded",
      fontSize: 16
      },
      text: {
      marginLeft: -119.09,
      width: 53
      },
      referralDrOptional: {
      width: 161,
      top: 10,
      marginLeft: -120.98
      },
      password: {
      top: 9,
      width: 83
      },
      vectorIcon: {
      height: "35.79%",
      width: "5.71%",
      top: "31.32%",
      right: "10.01%",
      bottom: "32.89%",
      left: "84.28%",
      maxWidth: "100%",
      overflow: "hidden",
      maxHeight: "100%",
      position: "absolute"
      },
      groupParent: {
      flex: 1,
      width: "100%",
      gap: 15
      }
      });

const Tpsignin =()=> 
{
  return(  
    <>
    <View style={tp.groupParent}>
    <Image style={tp.childLayout} contentFit="contain" source={require('@/assets/images/apple.svg')} />
    <View style={tp.childLayout}>
    <Image style={tp.groupItem}  contentFit="contain" source={require('@/assets/images/google.svg')} />
    </View>
    </View>
    </>
  );
};

const tp = StyleSheet.create({
  childLayout: {
  height: 42,
  width: 48,
  },
  groupChild: {
  borderRadius: 18,
  backgroundColor: "#fff",
  position: "absolute"
  },
  groupItem: {
  height: "56.02%",
  width: "45.45%",
  top: 10,
  right: "27.16%",
  bottom: "25.17%",
  left: "27.38%",
  maxWidth: "100%",
  overflow: "hidden",
  maxHeight: "100%",
  position: "absolute"
  },
  groupParent: {
  flex: 1,
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  gap : 10,
  top:40
  }
  });


  const Options = () => {
    return (
      <>
    <View style={[forgotpass.rectangleParent,{top:10}]}>
    <View style={[forgotpass.groupChild2, forgotpass.groupChildPosition]} />
    <Pressable>
    <Link href={"/(auth)/signin"} style={[forgotpass.newacc, forgotpass.groupChildPosition]}>Back to Sign In</Link>
    </Pressable>
    </View>
    </>
    );
    };
    const forgotpass = StyleSheet.create({
    groupChildPosition: {
    left: "40%",
    position: "absolute"
    },
    groupChild: {
    marginLeft: -35,
    top: -1,
    borderRadius: 100,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 125,
    height: 33
    },
    groupChild2: {
      marginLeft: -60,
      top: -1,
      borderRadius: 100,
      borderStyle: "solid",
      borderColor: "#000",
      borderWidth: 1,
      width: 120,
      height: 33
      },
    newacc: {
      paddingTop:3,
      marginLeft: -63,
      top: "50%",
      fontSize: 12,
      fontWeight: "300",
      fontFamily: "SFProRounded",
      color: "#000",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 130
      },
    
    rectangleParent: {
    flex: 1,
    width: "100%",
    height: 36,
    opacity: 0.5,
    marginLeft:12,
    }
    });
    