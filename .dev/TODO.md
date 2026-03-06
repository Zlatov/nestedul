# Author notes. Not part of project documentation.

*   nestedul.zlatov.su.


## Часто используемые команды при разработке

```bash
nvm use
yarn
yarn build
# Ctrl + Alt + C (в файле demo/index.html)
# F5

npm pack --dry-run
npm publish
```


## Как создавалось

```sh
touch .nvmrc # 24.11.0
nvm use
node -v

yarn add -D sass esbuild
yarn add -D jquery
yarn build

# Публикация частного репозитория
# 
# Елси имя репозитория (см. package.json) имеет шаблон @name/rep_name, тогда
# репозиторий считается частным (приватным и соответственно платным). Но можно
# опубликовать частный репозиторий с параметром --access=public, что сделает
# его публичным и бесплатным.
npm publish --access=public
npm publish

# Не понравился опубликованный пакет? - В течении 24 часов можно удалить.
npm -f unpublish
```


## AI context

```
Контекст для продолжения разговора:

Я пишу npm пакет nestedul.
Он превращает вложенные ul/li списки в древовидный UI.

Стек:
- JS библиотека
- SCSS
- сборка через esbuild + sass
- dist содержит:
  - nestedul.js
  - nestedul.iife.js
  - nestedul.css
  - assets/svg

Пакет тестируется в Rails 8 (Propshaft + jsbundling + cssbundling).

Сейчас задача:
```
