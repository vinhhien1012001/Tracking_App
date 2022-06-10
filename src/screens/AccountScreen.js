import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <View style={{ marginTop: 30 }}>
      <Spacer>
        <Text style={{ fontSize: 48 }}>AccountScreen</Text>
        <Spacer />
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </View>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <MaterialCommunityIcons name="account" size={24} color="black" />,
};

const styles = StyleSheet.create({});

export default AccountScreen;
