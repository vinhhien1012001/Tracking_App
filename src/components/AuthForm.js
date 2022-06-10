import React, { useState } from "react";
import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import Spacer from "./Spacer";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Spacer>
        <Text style={styles.title}>{headerText}</Text>
        <Spacer />
        <View style={styles.container}>
          <MaterialCommunityIcons name="gmail" size={28} />
          <TextInput
            style={styles.input}
            label="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter your Email"
          />
        </View>
        <View style={styles.container}>
          <AntDesign name="key" size={28} color="black" />
          <TextInput
            style={styles.input}
            secureTextEntry
            label="Password"
            value={password}
            onChangeText={setPassword}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Enter your Password"
          />
        </View>
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <Button
          style={styles.button}
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  input: { flex: 1, height: 50, paddingLeft: 8 },
  container: {
    flexDirection: "row",
    height: 48,
    alignItems: "center",
    borderRadius: 5,
    borderColor: "grey",
    padding: 5,
    borderWidth: 2,
    marginBottom: 10,
  },
  button: {
    margin: 25,
    borderRadius: 5,
  },
});

export default AuthForm;
