import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import en from './en';
import vi from './vi';

// Set the key-value pairs for the different languages you want to support.
I18n.translations = {
  en,
  vi,
};

// Set the locale once at the beginning of your app.
I18n.locale = Localization.locale;

// When a value is missing from a language it'll fallback to another language with the key present.
I18n.fallbacks = true;

export default I18n;
