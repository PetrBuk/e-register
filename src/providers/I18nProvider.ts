import { TranslationMessages } from 'ra-core'
import polyglotI18nProvider from 'ra-i18n-polyglot'
import englishRA from 'ra-language-english'
import czechRA from 'ra-language-czech'

import csCustoms from '../langs/cs.json'
import enCustoms from '../langs/en.json'

type Lang = "en" | "cs";

type StringMap = {
    [key: string]: StringMap | string | undefined,
};

export type Vocabulary = {
    [key: string]: StringMap,
};

const vocabulary: { [key: string]: TranslationMessages} = {
    en: {...englishRA, ...enCustoms},
    cs: {...czechRA, ...csCustoms},
};

const getLangSetting = (): Lang => {
    return localStorage.getItem("lang") === "en"
        ? "en"
        : "cs";
}

const i18nProvider = polyglotI18nProvider((locale) => vocabulary[locale] || vocabulary['en'], getLangSetting());

export default i18nProvider;
