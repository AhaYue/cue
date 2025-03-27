

import { create } from 'zustand'



type LanguageStore = {  
  language: 'zh' | 'en'
  toggleLanguage: () => void
}


//根据 LocalStorage  设置默认语言



export const useLanguageStore = create<LanguageStore>((set) => ({

  language: 'en',
  toggleLanguage: () => {
    set((state) => ({ language: state.language === 'zh' ? 'en' : 'zh' }))
  },

}))


