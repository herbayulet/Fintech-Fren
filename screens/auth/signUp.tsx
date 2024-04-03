import {
  KeyboardAvoidingView,
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
  const { kodeNegara, setKodeNegara, nomorHp, setNomorHp } = useSignUp();
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
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
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
