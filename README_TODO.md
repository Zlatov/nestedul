```sh
npm init

# Пересоздаём dist из src
rm -r dist &&\
mkdir -p dist/js &&\
uglifyjs src/js/nlist.js --comments '/^!|@(?:license|preserve)/' -b indent_level=2 -o dist/js/nlist.js &&\
uglifyjs src/js/nlist.js -m --comments '/^!|@(?:license|preserve)/' -o dist/js/nlist.min.js &&\
sass src/sass/nlist.scss:dist/css/nlist.css &&\
sass src/sass/nlist.scss:dist/css/nlist.min.css -s compressed

npm publish --access=public
```
