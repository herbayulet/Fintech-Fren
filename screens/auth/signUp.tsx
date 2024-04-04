import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { defaultStyles } from "@/constants/Style";
import { useSignUp } from "@/func/auth/useSignUp";
import Colors from "@/constants/Colors";
import InputSignup from "@/components/InputSignup";
import ButtonLinkSignup from "@/components/ButtonLinkSignup";

const SignUpScreen = () => {
  const { kodeNegara, setKodeNegara, nomorHp, setNomorHp, onSignUp } =
    useSignUp();
  const keyboardVerticalOffset = Platform.OS === "android" ? 80 : 0;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
    >
      <View style={defaultStyles.container}>
        <Text style={defaultStyles.header}>Hayuk deh mulai aje</Text>
        <Text style={defaultStyles.descriptionText}>
          Masukin nomor hp lo, nanti bakal dikirim OTP nye
        </Text>
        <InputSignup
          kode={kodeNegara}
          setKode={setKodeNegara}
          nomor={nomorHp}
          setNomor={setNomorHp}
        />
        <ButtonLinkSignup nomorHp={nomorHp} />
        <View style={{ flex: 1 }} />

        <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            nomorHp !== "" ? styles.enabled : styles.disabled,
            { bottom: 0 },
          ]}
          onPress={onSignUp}
        >
          <Text style={defaultStyles.buttonText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default SignUpScreen;
