import { useState } from "react";

export const useSignUp = () => {
  const [kodeNegara, setKodeNegara] = useState<string>("+62");
  const [nomorHp, setNomorHp] = useState("");
  return { kodeNegara, setKodeNegara, nomorHp, setNomorHp };
};
