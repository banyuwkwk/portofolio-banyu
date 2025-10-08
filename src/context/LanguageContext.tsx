"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Lang = "en" | "id";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");

  // Ambil bahasa dari localStorage saat mount
  useEffect(() => {
    const storedLang = localStorage.getItem("lang") as Lang;
    if (storedLang) setLang(storedLang);
  }, []);

  // Simpan bahasa ke localStorage tiap berubah
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
