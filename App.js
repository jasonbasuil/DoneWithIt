import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Platform, View } from "react-native";
import {
  useDimensions,
  useDeviceOrientation,
} from "@react-native-community/hooks";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Card from "./app/components/Card";
import jacket from "./app/assets/jacket.jpg";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";

export default function App() {
  console.log(useDimensions());
  const { landscape } = useDeviceOrientation();

  return <ViewImageScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
