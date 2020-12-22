const svgSprite = require('gulp-svg-sprite');
const {src, dest} = require('gulp');

const svgSprites = () => {
    return src('./src/img/svg/**.svg')
      .pipe(svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg" //sprite file name
          }
        },
      }))
      .pipe(dest('./build/img'));
}

module.exports = svgSprites;