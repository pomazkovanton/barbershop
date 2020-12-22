const {src, dest} = require('gulp');
const pug = require('gulp-pug');
const htmlValidator = require('gulp-w3c-html-validator');
const bemValidator = require('gulp-html-bem-validator');
const browserSync = require('browser-sync');

const pug2html = () => {
    return src('./src/pages/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(htmlValidator())
        .pipe(bemValidator())
        .pipe(dest('./build'))
        .pipe(browserSync.stream())
}

module.exports = pug2html;