import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";

const RootLayout = () => {
  return (
    <View style={styles.container}>
      <Text>Hello World! </Text>
      <StatusBar barStyle="dark-content" />
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
