'use strict';

// eslint-disable-next-line no-undef
const i18n = new VueI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages,
});
