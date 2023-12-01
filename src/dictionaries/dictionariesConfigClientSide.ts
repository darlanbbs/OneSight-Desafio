"use client";

import { Locale, i18n } from "../app/config/i18n.config";

import { configDictionarie } from "./dictionariesConfig";

export const getDictionarieConfigClientSide = (locale: Locale) => {
  return (
    configDictionarie[locale] ?? configDictionarie[i18n.defaultLocale as Locale]
  );
};
