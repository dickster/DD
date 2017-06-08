


import {DocId} from "../model/doc.id";

export class Translations {

    readonly DEFAULT_LANG = 'en';

    private parent:DocId;
    private translations:{[lang:string]:{[key:string]:string}};

    public get(key:string, lang=this.DEFAULT_LANG):string {
        if (!this.translations[lang]) {
            return key + ' ['+lang+']';
        }
        let result = this.translations[lang][key];
        return result ? result : key;
    }

    public isTranslated(key:string, lang:string):boolean {
        return (this.translations[lang]!=null) && (this.translations[lang][key]!=null);
    }

}
