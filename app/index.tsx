import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { Link } from "expo-router";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World! </Text>
      <StatusBar barStyle="dark-content" />
      <Link href={"/profile"} style={{ color: "blue" }}>
        Go TO Profile
      </Link>
    </View>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
