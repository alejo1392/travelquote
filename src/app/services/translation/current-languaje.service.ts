import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Locale } from './locale.interface';

@Injectable({
    providedIn: 'root'
})
export class CurrentLanguageService {

    private langIds: any = [];

    constructor(private translate: TranslateService) {
        this.translate.addLangs(['en-US', 'es-CO']);
        this.translate.setDefaultLang('es-CO');
    }

    loadTranslations(...args: Locale[]): void {
        const locales = [...args];
        locales.forEach(locale => {
            this.translate.setTranslation(locale.lang, locale.data, true);
            this.langIds.push(locale.lang);
        });
        this.translate.addLangs(this.langIds);
    }

    setLanguage(lang) {
        if (lang) {
            this.translate.use(this.translate.getDefaultLang());
            this.translate.use(lang);
            localStorage.setItem('culture', lang);
        }
    }

    getSelectedLanguage(): any {
        return localStorage.getItem('culture') || this.translate.getDefaultLang();
    }
}
