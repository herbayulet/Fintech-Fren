import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { defaultStyles } from "@/constants/Style";
import Colors from "@/constants/Colors";

interface ButtonLinkSignupProps {
  nomorHp: string;
}

const ButtonLinkSignup = ({ nomorHp }: ButtonLinkSignupProps) => {
  return (
    <View>
      <Link href={"/login"} asChild>
        <TouchableOpacity>
          <Text style={defaultStyles.textLink}>
            Udeh punya akun belom sebelum nye? Login
          </Text>
        </TouchableOpacity>
      </Link>
      <View style={{ flex: 1 }} />

      <TouchableOpacity
        style={[
          defaultStyles.pillButton,
          nomorHp !== "" ? styles.enabled : styles.disabled,
          { marginBottom: 20 },
        ]}
      >
        <Text style={defaultStyles.buttonText}>Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonLinkSignup;

const styles = StyleSheet.create({
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});
