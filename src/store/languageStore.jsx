import { createContext, useContext, useState } from "react";
import { en } from "./translations/en";
import { da } from "./translations/da";
import { ja } from "./translations/ja";

const translations = { en, da, ja };

export const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "da", label: "DA" },
  { code: "ja", label: "日本語" },
];

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
