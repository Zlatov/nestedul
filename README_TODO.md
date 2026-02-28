* Стили перевернуть в другой интерфейс классов:
  ```html
  <ul class="nestedul nestedul-narrow">...</ul> - неполное отображение соединяющих линий;
  <ul class="nestedul nestedul-static"></ul> - отключить интерактивность/отображение иконок.
  ```

```sh
nvm use
node -v

yarn add -D sass esbuild
yarn add -D jquery
yarn build

# Публикация частного репозитория. @name/rep_name - теперь по умолчанию все
# приватные (и платные). Опубликовать частный репозиторий с
# параметром --access=public - но публично.
npm publish --access=public
npm publish

# Тестирование - Нет! - проверка опубликованного пакета.
mkdir -p check
cd check
yarn --cwd ./ add nestedul

# Не понравился опубликованный пакет? - В течении 24 часов можно удалить.
npm -f unpublish

# Расзработка CSS в test/index.html
sass src/sass/nestedul.scss:css/nestedul.css -w

# Разработка JS в test/index.html
# https://esnext.github.io/es6-module-transpiler/editor
cd test
yarn --cwd . add jquery
cdnestedul
while inotifywait --event close_write src/js/nestedul.js; do uglifyjs src/js/nestedul.js --comments '/^!|@(?:license|preserve)/' -b indent_level=2 -o js/nestedul.js; done

# Добавление в rails 7
yarn add file:/home/iadfeshchm/projects/my/nestedul
cp -r node_modules/nestedul vendor/javascript
@import "nestedul/css/nestedul.css";
pin "nestedul", to: "nestedul/js/nestedul.module.js"
import NestedUl from "nestedul"
$(document).on('turbo:load', function() {
  NestedUl.activate()
})

# Добавление в rails 6
yarn add file:/home/iadfeshchm/projects/my/nestedul
@import "nestedul/css/nestedul.css";
import NestedUl from "nestedul"
$(document).on("turbolinks:load", function() {
  NestedUl.activate()
})
```
