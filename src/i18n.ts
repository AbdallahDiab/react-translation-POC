// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // load translations using http (default public/assets/locales)
  .use(LanguageDetector) // detect user language
  .use(initReactI18next) // pass the i18n instance to react-i18next
  .init({
    fallbackLng: "en", // use en if detected lng is unavailable
    debug: true, // enable console output in development mode
    ns: ["common", "home", "footer", "auth"], // namespaces used in application
    contextSeparator: "_",
    defaultNS: "common", // default namespace
    backend: {
      loadPath: "http://localhost:5000/{{lng}}_{{ns}}", // path to load the translations
      backends: [HttpBackend],
      // backendOptions: [
      //   {
      //     expirationTime: 7 * 24 * 60 * 60 * 1000, // 7 days
      //   },
      //   {
      //     loadPath: "http://localhost:5000/{{lng}}/{{ns}}", // path to load the translations
      //   },
      // ],
    },
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

// // src/i18n.ts
// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import { HttpBackend } from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";

// // Import translation files
// import commonEN from "../public/locales/en/authEn.json";
// import authEN from "../public/locales/en/authEn.json";
// import commonFR from "../public/locales/fr/commonFr.json";
// import authFR from "../public/locales/fr/authFr.json";

// const resources = {
//   en: {
//     common: commonEN,
//     auth: authEN,
//   },
//   fr: {
//     common: commonFR,
//     auth: authFR,
//   },
// };

// i18n
//   .use(HttpBackend)
//   .use(initReactI18next)
//   .init({
//     resources,
//     fallbackLng: "en",
//     debug: true,
//     ns: ["common", "auth"], // namespaces used in application
//     defaultNS: "common",
//     interpolation: {
//       escapeValue: false, // React already safes from xss
//     },
//     react: {
//       useSuspense: false,
//     },
//   });

// export default i18n;
