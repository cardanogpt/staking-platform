// contexts/LucidContext.tsx
import React, { createContext, useEffect, useState } from "react";
import { Lucid } from "lucid-cardano";

export const LucidContext = createContext<{ lucid: Lucid | null; setLucid: React.Dispatch<React.SetStateAction<Lucid | null>>; resetLucid: () => void; }>({
  lucid: null,
  setLucid: () => {},
  resetLucid: () => {},
});

export const LucidProvider = ({ children }: { children: React.ReactNode }) => {
  const [lucid, setLucid] = useState<Lucid | null>(null);

  const initializeLucid = async () => {
    const lucidInstance = await Lucid.new();
    setLucid(lucidInstance);
  };

  const resetLucid = async () => {
    setLucid(null);
    await initializeLucid();
  };

  useEffect(() => {
    initializeLucid();
  }, []);

  return (
    <LucidContext.Provider value={{ lucid, setLucid, resetLucid }}>
      {children}
    </LucidContext.Provider>
  );
};