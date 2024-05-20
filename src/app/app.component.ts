import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dropdown?: boolean;
  title = 'lang';
  languages = [
    { name: 'English', code: 'en', flag: 'https://tailwindui.com/img/flags/flag-canada.svg' },
    { name: 'Thai', code: 'th', flag: 'https://tailwindui.com/img/flags/flag-thailand.svg' },
    { name: 'indonesian', code: 'th', flag: 'https://tailwindui.com/img/flags/flag-thailand.svg' },
    // Add more languages as needed
  ];
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  data() {
    return {
      dropdown: false,
    }
  }
}
