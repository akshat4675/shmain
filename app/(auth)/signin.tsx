import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, Pressable, StatusBar, ActivityIndicator } from 'react-native';
import { signIn } from './cognito';
import { Router,Link, router } from 'expo-router';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SignInScreen=({navigation}:any) =>{
  

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
    <Signinform/>    
    </View>
    </View>
    </ScrollView>
    </SafeAreaView>
    </>
  );
}


export default SignInScreen;


const Signinform =() => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string>(''); // Set error as string
  const [loading, setLoading] = useState<boolean>(false);

  const handleSignIn = async () => {

    setLoading(true);
    try {
      await signIn(email, password);
      Alert.alert("succes")    
      router.replace('/home')
    } catch (err: any) {1
      setError(err?.message || 'Something went wrong');
    }
    setLoading(false);
  };

  
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="black" />
      </View>
    );
  }

  return (
    <>
    <View style={[form.groupParent,{top:"3%"}]}>
        <View style={form.rectangleParent}>
        <View style={form.groupChild} />
        <TextInput editable style={form.textInput} placeholder="Email" value={email} onChangeText={setEmail}></TextInput>
        </View>
        <View style={form.rectangleParent}>
        <View style={form.groupChild} />
        <TextInput editable style={form.textInput} placeholder="Password" value={password} secureTextEntry onChangeText={setPassword}></TextInput>
        </View>
        <View >
          <Options/>
        </View>
        <View style={{bottom:40}}>
        <View style={{top:35,left:10}}>
        <Pressable style={{top:25}} >
        <Link href={'/(auth)/signin'}><FontAwesome name="apple" size={24} color="black" /></Link> 
        </Pressable> 
        <Pressable style={{left:50 , }} >
        <Link href={'/(auth)/signin'}><FontAwesome name="google" size={24} color="black" /></Link> 
        </Pressable> 
        </View>
        <View style={[but.rectangleParent]}> 
        <View style={[but.groupChild, but.groupPosition]} />
        <Pressable style={but.button} onPress={handleSignIn}>
        <Text style={[signinbutton.signIn, signinbutton.signInPosition]}>Sign In</Text>
        <Image style={signinbutton.groupItem} contentFit="cover" source={require('@/assets/images/walklingmanwhite.svg')} />
        </Pressable>
        </View>
        </View>
    </View>
    </>


  );
}

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

const screen = StyleSheet.create({

  h : {
    flex: 1,
  
    width: "auto",
    backgroundColor: "#fff",
    
  },
  
  u : {
    marginTop: 10,
  },
  f: {
    top:"15%",
    paddingLeft: "15%",
  },
  });
  

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
  height: "36%",
  },
  social: {
    color: "#fff",
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

  const Usertype = (navigation:any) => {

    return (
      <View style={[useropt.groupParent,{left:"26%",top:"60%"}]}>
      <View style={useropt.groupChildLayout}>
      <View style={[useropt.groupChild, useropt.signInPosition]} />
      <Text style={[useropt.signIn, useropt.signInPosition]}>Sign In</Text>
      </View>
      </View>
    );
    };

    const Options = () => {
      return (
        <>
      <View style={[forgotpass.rectangleParent ]}>
      <View style={[forgotpass.groupChild, forgotpass.groupChildPosition]} />
      <Pressable>
      <Link href={"/(auth)/signup"} style={[forgotpass.forgotPassword, forgotpass.groupChildPosition]}>Forgot Password ?</Link>
      </Pressable>
      </View>

      <View style={[forgotpass.rectangleParent,{top:10}]}>
      <View style={[forgotpass.groupChild2, forgotpass.groupChildPosition]} />
      <Pressable>
      <Link href={"/(auth)/signup"} style={[forgotpass.newacc, forgotpass.groupChildPosition]}>Don't have a account?</Link>
      </Pressable>
      </View>
      </>
      );
      };
      const forgotpass = StyleSheet.create({
      groupChildPosition: {
      left: "50%",
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
        width: 150,
        height: 33
        },
      forgotPassword: {
      paddingTop:3,
      marginLeft: -35.13,
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
      newacc: {
        paddingTop:3,
        marginLeft: -48.13,
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
      

  const useropt = StyleSheet.create({
    signInPosition: {
      left: "50%",
      position: "absolute"
      },
      groupChild: {
      marginLeft: -97.5,
      top: 0,
      borderRadius: 136,
      borderStyle: "solid",
      borderColor: "#030303",
      borderWidth: 2.7,
      height: 61,
      width: 195
      },
      signIn: {
      marginTop: -24.50,
      marginLeft: -57.47,
      top: "50%",
      fontSize: 24,
      fontFamily: "SFProRounded",
      color: "#000",
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      width: 115,
      height: 38,
      alignItems: "center"
      },
      groupChildLayout: {
      height: 61,
      width: 195
      },
      groupParent: {
      flex: 1,
      width: "100%",
      flexDirection: "row",
      alignItems: "center"
      }
    });
    
    const signinbutton = StyleSheet.create({
      signInPosition: {
        left: "50%",
        position: "absolute"
        },
        groupChild: {
        marginLeft: -66.5,
        top: 0,
        borderRadius: 100,
        backgroundColor: "#ff6233",
        width: 133,
        height: 45
        },
        signIn: {
        marginLeft: -44.27,
        top: 10,
        fontSize: 16,
        fontWeight: "700",
        fontFamily: "SFProRounded",
        color: "#fffbfb",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 84,
        height: 25
        },
        groupItem: {
        top: 14,
        left: "69%",
        width: 17,
        height: 17,
        position: "absolute"
        },
        rectangleParent: {
        flex: 1,
        width: "100%",
        height: 45
        }
        });

    const form = StyleSheet.create({

      textInput: {
      marginLeft: 12,
      fontSize: 15,
      textAlign: "left",
      color : "black",
      fontFamily: "SFProRounded",
      paddingTop:10,
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
    gap: 30   
    }
    });