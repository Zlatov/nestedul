```sh
npm init

# Пересоздаём dist из src
rm -r dist &&\
mkdir -p dist/js &&\
uglifyjs src/js/nlist.js --comments '/^!|@(?:license|preserve)/' -b indent_level=2 -o dist/js/nlist.js &&\
uglifyjs src/js/nlist.js -m --comments '/^!|@(?:license|preserve)/' -o dist/js/nlist.min.js &&\
sass src/sass/nlist.scss:dist/css/nlist.css &&\
sass src/sass/nlist.scss:dist/css/nlist.min.css -s compressed

# Публикация частного репозитория (@name/rep_name - теперь по умолчанию все приватные, платные.) но публично.
npm publish --access=public

# Тестирование - нет, проверка опубликованного пакета.
cd check
yarn --cwd ./ add @zlatov/nlist

# Не понравился опубликованный пакет? - В течении 24 часов можно удалить.
npm -f unpublish
```
