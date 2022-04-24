interface LanguageI {
  code: string;
  path: string;
}
let savedOptions: {
  languages: LanguageI[];
  selectedLanguage: {
    code: string;
    path: string;
    translation?: any;
  };
  defaultTranslation: string;
} = {
  languages: [],
  defaultTranslation: "",
  selectedLanguage: {
    code: "",
    path: "",
    translation: {},
  },
};

export const getSelectedLanguage = () => {
  return savedOptions.selectedLanguage;
};
export const initLanguage = async (
  options: {
    languages: LanguageI[];
    defaultLanguage?: string;
    defaultTranslation?: string;
  },
  ref: any
): Promise<void> => {
  options.defaultLanguage = options.defaultLanguage || "en";
  savedOptions.languages = options.languages;
  savedOptions.defaultTranslation = options.defaultTranslation || "";
  let selectLanguage = savedOptions.languages.find(
    (lang) => lang.code === options.defaultLanguage
  );
  if (selectLanguage) {
    savedOptions.selectedLanguage = { ...selectLanguage };
    savedOptions.selectedLanguage.translation = ref({});

    savedOptions.selectedLanguage.translation.value = await import(
      /* @vite-ignore */
      savedOptions.selectedLanguage.path
    );
  }
};

export const getLanguages = () => savedOptions.languages;

export const switchLang = async (code: string) => {
  let language = savedOptions.languages.find((lang) => lang.code === code);

  if (!language) {
    throw "Cannot find langauge";
  }

  savedOptions.selectedLanguage.code = language.code;
  savedOptions.selectedLanguage.path = language.path;

  savedOptions.selectedLanguage.translation.value = await import(
    /* @vite-ignore */ language.path
  );
  return language;
};
export const t = (path: string): string | undefined => {
  let pathBits = path.split(".");
  let translation;
  for (let i = 0; i < pathBits.length; i++) {
    translation = translation
      ? translation[pathBits[i]]
      : savedOptions.selectedLanguage.translation.value[pathBits[i]];
  }
  return translation || savedOptions.defaultTranslation;
};
