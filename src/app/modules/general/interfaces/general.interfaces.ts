import { ILanguage } from "src/assets/language/language";

export interface IGeneralState {
    language: string;
    languages: string[];
    words: ILanguage;
}