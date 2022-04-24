interface LanguageI {
    code: string;
    path: string;
}
export declare const getSelectedLanguage: () => {
    code: string;
    path: string;
    translation?: any;
};
export declare const initLanguage: (options: {
    languages: LanguageI[];
    defaultLanguage?: string;
    defaultTranslation?: string;
}, ref: any) => Promise<void>;
export declare const getLanguages: () => LanguageI[];
export declare const switchLang: (code: string) => Promise<LanguageI>;
export declare const t: (path: string) => string | undefined;
export {};
