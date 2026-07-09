import { createContext } from "react";

export type ThemeType = "light" | "dark";
export type LangType = "fr" | "en";

export const UiContext = createContext<{
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
  lang: LangType;
  setLang: (l: LangType) => void;
}>({
  theme: "light",
  setTheme: () => {},
  lang: "fr",
  setLang: () => {},
});

export default UiContext;
