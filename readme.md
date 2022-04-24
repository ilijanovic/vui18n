# vui18n

vui18n is internationalization module. It easily integrates some localization features to your Vue.js Application.

## Installation

You can install it with npm

```js
npm i vui18n
```

Only for Vue.js 3

## Get started

To get started, you need to initialize the module. You can do it inside `main.ts` file:

```js
import { createApp, ref } from "vue";
import { initLanguage } from "vui18n";
import App from "./App.vue";
initLanguage(
  {
    languages: [
      {
        code: "en",
        path: "/languages/en.json",
      },
      {
        code: "de",
        path: "/languages/de.json",
      },
    ],
  },
  ref
);
const app = createApp(App);
app.mount("#app");
```

Its important to pass `ref` as the second argument to the `initLanguage` function.
This is your starting point. The translation files are lazy loaded by default. This means only the translation file that is being used is loaded.

### Use it in your app

```js
<script setup lang="ts">
import { t } from "vui18n"
</script>
<template>
    <div>
        <p>{{ t("name") }}</p>
    </div>
</template>
```

The text will no be translated. The default language is `en`

### Switch languages

You can switch the languages:

```js
<script setup lang="ts">
  import {switchLang} from "vui18n" 
  switchLang("de")
</script>
```

You need to pass the locale code. `switchLang` returns an promise. It lazy load the translation file.

### Get selected language

You can get the current language with `getSelectedLanguage`

```js
<script setup lang="ts">
  import {getSelectedLanguage} from "vui18n"
</script>
```

### Get all languages

You can access all languages with `getLanguages`

```js
<script setup lang="ts">
  import {getLanguages} from "vui18n"
</script>
```
