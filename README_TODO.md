```sh
npm init

# Пересоздаём dist из src
rm -rf css &&\
rm -rf js &&\
mkdir -p js &&\
uglifyjs src/js/nlist.js --comments '/^!|@(?:license|preserve)/' -b indent_level=2 -o js/nlist.js &&\
uglifyjs src/js/nlist.js -m --comments '/^!|@(?:license|preserve)/' -o js/nlist.min.js &&\
sass src/sass/nlist.scss:css/nlist.css &&\
sass src/sass/nlist.scss:css/nlist.min.css -s compressed

# Публикация частного репозитория (@name/rep_name - теперь по умолчанию все приватные, платные.) но публично.
npm publish --access=public

# Тестирование - нет, проверка опубликованного пакета.
cd check
yarn --cwd ./ add @zlatov/nlist

# Не понравился опубликованный пакет? - В течении 24 часов можно удалить.
npm -f unpublish

# Расзработка CSS в test/index.html
sass src/sass/nlist.scss:css/nlist.css -w

# Разработка JS в test/index.html
# https://esnext.github.io/es6-module-transpiler/editor
cd test
yarn --cwd . add jquery
cdnlist
while inotifywait --event close_write src/js/nlist.js; do uglifyjs src/js/nlist.js --comments '/^!|@(?:license|preserve)/' -b indent_level=2 -o js/nlist.js; done
```
