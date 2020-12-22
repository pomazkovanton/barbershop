const {src, dest} = require('gulp');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

const imageMinify = () => {
    return src('src/img/*.+(png|jpg|gif|ico|svg|webp)')
        .pipe(
            webp({
                quality: 70
            })
        )
        .pipe(dest('build/img'))
        .pipe(src('src/img/*.+(png|jpg|gif|ico|svg|webp)'))
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.mozjpeg({
            quality: 75,
            progressive: true
            }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
            plugins: [
                { removeViewBox: true },
                { cleanupIDs: false }
            ]
            })
        ]))
        .pipe(dest('build/img'))
}

module.exports = imageMinify;