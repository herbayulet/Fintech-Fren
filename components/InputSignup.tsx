import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

interface InputSignupProps {
  kode: string;
  nomor: string;
  setKode: (kode: string) => void;
  setNomor: (kode: string) => void;
}

const InputSignup = ({ kode, nomor, setKode, setNomor }: InputSignupProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Kode Negara"
        value={kode}
        style={[styles.input, { width: 50 }]}
        placeholderTextColor={Colors.gray}
      />
      <TextInput
        placeholder="Nomor Hape"
        keyboardType="numeric"
        value={nomor}
        onChangeText={setNomor}
        placeholderTextColor={Colors.gray}
        style={[styles.input, { flex: 1 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 40,
    flexDirection: "row",
  },
  input: {
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 16,
    fontSize: 15,
    marginRight: 10,
  },
  enabled: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primaryMuted,
  },
});

export default InputSignup;
