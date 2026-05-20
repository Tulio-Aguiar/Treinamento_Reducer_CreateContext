import { useLanguage, type Language } from "./LanguageContext";

export default function Greeting() {
  const { language } = useLanguage();
  const greetings: Record<Language, string> = {
    "pt-BR": "Olá",
    "en-US": "Hello",
    "de-DE": "Hallo",
  };
  return <h1>{greetings[language]}!</h1>;
}
