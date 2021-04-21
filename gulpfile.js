const { src, dest, watch, parallel, series }  = require('gulp');

const scss          = require('gulp-sass');
const concat        = require('gulp-concat');
const browserSync   = require('browser-sync').create();
const autoprefixer  = require('gulp-autoprefixer');
const imagemin      = require('gulp-imagemin');
const del           = require('del');
const includefile   = require('gulp-file-include')

function browsersync() {
  browserSync.init({
    server : {
      baseDir: 'app/'
    }
  });
}

function cleanDist() {
  return del('dist')
}

function images() {
  return src('app/images/**/*')
    .pipe(imagemin(
      [
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [
            { removeViewBox: true },
            { cleanupIDs: false }
          ]
        })
      ]
    ))
    .pipe(dest('dist/images'))
}

function scripts() {
  return src([
    'app/js/*.js',
  ])
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}


function styles() {
  return src('app/scss/style.scss')
      .pipe(scss({outputStyle: 'expanded'}))
      .pipe(concat('style.css'))
      .pipe(autoprefixer({
        overrideBrowserslist: ['last 2 version'],
        grid: true
      }))
      .pipe(dest('app/css'))
      .pipe(browserSync.stream())
}

function build() {
  return src([
    'app/css/style.css',
    'app/fonts/**/*',
    'app/js/*.js',
    'app/*.html'
  ], {base: 'app'})
    .pipe(dest('dist'))
}

function watching() {
  watch(['app/scss/**/*.scss'], styles);
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts);
  watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;


exports.build = series(images, build);
exports.default = parallel(styles ,scripts ,browsersync, watching);


