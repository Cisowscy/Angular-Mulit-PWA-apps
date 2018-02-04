import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}




function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(reg => {
        console.log('Registration successful', reg);
      })
        .catch(e => console.error('Error during service worker registration:', e));
    } else {
      console.warn('Service Worker is not supported');
    }
  }

  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

