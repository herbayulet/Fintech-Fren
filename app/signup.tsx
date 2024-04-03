import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Style";
import SignUpScreen from "@/screens/auth/signUp";

const Page = () => {
  return <SignUpScreen />;
};

export default Page;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
});
