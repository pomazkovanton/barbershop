const {watch} = require('gulp');
const browserSync = require('browser-sync');

const pug2html = require('./pug2html');
const sass2css = require('./sass2css');
const fonts = require('./fonts');
const fontsStyle = require('./fontsStyle');
const imageMinify = require('./imageMinify');
const scripts = require('./scripts');
const svgSprites = require('./svgSprites')

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: './build'
        }
    })

    watch('./src/styles/**/*.scss', sass2css);
    watch('./src/blocks/**/*.scss', sass2css);
    watch('./src/pages/*.pug', pug2html);
    watch('./src/blocks/**/*.pug', pug2html);
    watch('./src/js/**/*.js', scripts);
    watch('./src/blocks/**/*.js', scripts);
    watch('./src/fonts/**', fonts);
    watch('./src/fonts/**', fontsStyle);
    watch('./src/img/*.+(png|jpg|gif|ico|webp)', imageMinify);
    watch('./src/img/svg/*.svg', svgSprites);
}

module.exports = watchFiles;
