import React from "react";
import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";

import AppButton from "../components/AppButton";
import logo from "../assets/logo-red.png";
import background from "../assets/background.jpg";

export default function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={background}
      blurRadius={3}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={logo}></Image>
        <Text style={styles.tagline}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton color="primary" title="Login" />
        <AppButton color="secondary" title="Register" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    padding: 20,
  },
  tagline: {
    paddingVertical: 20,
    fontWeight: "bold",
    fontSize: 25,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
});
