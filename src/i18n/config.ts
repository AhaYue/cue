export type Locale = (typeof locales)[number];

export const locales = ['en', 'zh'] as const;
export const defaultLocale: Locale = 'en';


export const localeLabels = {

  en: {
    label: 'English',
    flag: '🇺🇸',
    locale: 'en-US',  
  },
  zh: {
    label: '简体中文',
    flag: '🇨🇳',
    locale: 'zh-CN',
  },
} as const;
