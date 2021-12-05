import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

function setDirection(direction) {
  document.body.setAttribute("dir", direction);
  document.documentElement.setAttribute("lang", i18n.language);

  document.getElementById("root").style.textAlign =
    direction === "rtl" ? "right" : "left";
}

i18n.on("languageChanged", (lng) => {
  localStorage.setItem("lng", lng);
  if (lng === "ar") {
    setDirection("rtl");
  } else {
    setDirection("ltr");
  }
});

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "ar",
    whitelist: ["en", "ar", "tr"],
    interpolation: {
      escapeValue: false,
    },
    ns: ["translation"],
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/locales/{{lng}}/{{ns}}.json`,
      addPath: `${process.env.PUBLIC_URL}/locales/add/{{lng}}/{{ns}}`,
    },
    detection: {
      order: ["localStorage"],
      lookupLocalStorage: "lng",
      checkWhitelist: true,
    },
    react: {
      useSuspense: false,
    },
    saveMissing: true,
    saveMissingTo: "all",
  });

export default i18n;
