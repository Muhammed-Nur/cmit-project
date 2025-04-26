const gulp = require('gulp');
const { src, dest, watch, series, parallel } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const paths = {
    styles: {
        src: ['./assets/css/**/*.sass'],
        dest: './assets/css/',
    }
};

function compileStyles() {
    return src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(dest(paths.styles.dest));
}

function watcher() {
    watch(paths.styles.src, parallel(compileStyles));
}

exports.compileStyles = compileStyles;
exports.watcher = watcher;
exports.default = series(
    parallel(compileStyles),
    watcher
);