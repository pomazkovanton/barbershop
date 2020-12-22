const {parallel, series} = require('gulp');


const pug2html = require('./gulp/pug2html')
const sass2css = require('./gulp/sass2css')
const imageMinify = require('./gulp/imageMinify')
const fonts = require('./gulp/fonts')
const fontsStyle = require('./gulp/fontsStyle')
const clean = require('./gulp/clean')
const scripts = require('./gulp/scripts')
const svgSprites = require('./gulp/svgSprites')
const watchFiles = require('./gulp/watchFiles')

exports.sass2css = sass2css;
exports.pug2html = pug2html;
exports.watchFiles = watchFiles;
exports.imageMinify = imageMinify;
exports.fonts = fonts;
exports.fontsStyle = fontsStyle;
exports.clean = clean;
exports.scripts = scripts;
exports.svgSprites = svgSprites;

exports.default = series(clean, parallel(pug2html, scripts, fonts, imageMinify, svgSprites), fontsStyle, sass2css, watchFiles);
