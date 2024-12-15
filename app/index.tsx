import React from "react";
import { View, Text, StatusBar } from "react-native";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-green-500">Hello World! </Text>
      <StatusBar barStyle="dark-content" />
      <Link href={"/profile"} style={{ color: "blue" }}>
        Go TO Profile
      </Link>
    </View>
  );
};

export default index;
