import { useState } from "react";

export const useSignUp = () => {
  const [kodeNegara, setKodeNegara] = useState<string>("+62");
  const [nomorHp, setNomorHp] = useState("");
  const onSignUp = async () => {};
  return { kodeNegara, setKodeNegara, nomorHp, setNomorHp, onSignUp };
};
