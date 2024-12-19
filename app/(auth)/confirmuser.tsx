import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import {  confirmUser } from "./cognito";
import { router } from "expo-router";

const ConfirmAccountScreen = () => {
  const [username, setUsername] = useState("");
  const [confirmationCode, setConfirmationCode] = useState("");
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleConfirm = async () => {
    try {
      await confirmUser(username, confirmationCode);
      setSuccess('User confirmed successfully!');
      setError('');
      Alert.alert("succes") // Navigate to SignIn after success
    } catch (err: any) {
      setError(err);
      setSuccess('');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Confirm Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmation Code"
        value={confirmationCode}
        onChangeText={setConfirmationCode}
      />
      <Button title="Confirm" onPress={handleConfirm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default ConfirmAccountScreen;
