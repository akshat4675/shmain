import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { confirmUser } from './cognito';
import { Link } from 'expo-router';
import { useLocalSearchParams } from 'expo-router';



const  ConfirmUserScreen=()=> {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState("");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { userInput,cognitoUser,userExists } = useLocalSearchParams();
          

  const handleConfirm = async () => {
    try {
      await confirmUser(email, code);
      setSuccess('User confirmed successfully!');
      setError('');
      Alert.alert("succes") // Navigate to SignIn after success
    } catch (err: any) {
      setError(err);
      setSuccess('');
    }
  };


  return (
    <>
    <View style={styles.container}>
      <Text style={styles.title}>Verify</Text>
      
      <TextInput
        placeholder="Confirmation Code"
        value={code}
        onChangeText={setCode}
        style={styles.input}
      />
      <Text style={{color:"black"}}>we sent a code to your number : {userInput}{"\n"} </Text>
      
      {error ? <Text style={styles.error}>{error}</Text> : null}
      {success ? <Text style={styles.success}>{success}</Text> : null}
      <Button title="Confirm" onPress={handleConfirm} />
      <Link href="/authscreen">login</Link>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16, textAlign: 'center' },
  input: { borderBottomWidth: 1, marginBottom: 16, padding: 8 },
  error: { color: 'red', marginBottom: 16 },
  success: { color: 'green', marginBottom: 16 },
});

export default ConfirmUserScreen;