// Load plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    prefix = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    plumber = require('gulp-plumber'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    del = require('del'),
    jshint = require('gulp-jshint');


// Base paths
var src = 'dev/',
    dest = 'www/',
    libs = 'bower_components/';

// Folder paths
var path = {
  template: {
    src: src + 'jade/',
    dest: dest + ''
  },
  style: {
    src: src + 'sass/',
    dest: dest + 'css/'
  },
  script: {
    src: src + 'js/',
    dest: dest + 'js/'
  },
  image: {
    src: src + 'img/',
    dest: dest + 'assets/img/'
  }
};

// File paths
var files = {
  template: {
    src: path.template.src + '**/*.jade',
    dest: path.template.dest + '*.html'
  },
  style: {
    src: path.style.src + '**/*.scss',
    dest: path.style.dest + '*.css'
  },
  script: {
    src: path.script.src + '*.js',
    dest: path.script.dest  + '*.js'
  },
  image: {
    src: path.image.src + '*',
    dest: path.image.dest + '*'
  }
};


// Connect
gulp.task('connect', function() {
  connect.server({
    root: dest,
    port: 1337,
    livereload: true
  });
});

// Open
gulp.task('open', function(){
  var options = {
    url: 'http://localhost:1337',
    app: 'chromium-browser'
  };
  gulp.src(dest)
    .pipe(open('', options));
});


// Jade > HTML
gulp.task('jade', function() {
  return gulp.src(path.template.src + '*.jade')
    .pipe(jade())
    .pipe(gulp.dest(path.template.dest))
    .pipe(notify({ title: 'Done', message: 'Converted Jade ✔' }))
    .pipe(connect.reload());
});

// Sass > CSS (Prefixed + Minified)
gulp.task('sass', function() {
  var onError = function(err) {
    notify.onError({
                title:    "Fail",
                subtitle: "Woopsie!",
                message:  "<%= error.message %>",
                sound:    "Beep"
            })(err);
    this.emit('end');
  };
  return gulp.src(path.style.src + 'main.scss')
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass({ style: 'expanded', includePaths: [libs + 'foundation/scss']}))
    .pipe(notify({ title: 'Done', message: 'Converted SASS ✔' }))
    .pipe(prefix({ browsers: ['last 20 version'], cascade: false }))
    .pipe(notify({ title: 'Done', message: 'Prefixed CSS ✔' }))
    .pipe(gulp.dest(path.style.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(notify({ title: 'Done', message: 'Minified CSS ✔' }))
    .pipe(gulp.dest(path.style.dest))
    .pipe(connect.reload());
});

// Scripts
gulp.task('scripts', function() {
  return gulp.src([path.script.src+'libs/**/*.js', path.script.src+'src/**/*.js', files.script.src])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(path.script.dest))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest(path.script.dest))
    .pipe(notify({ title: 'Done', message: 'Converted JS ✔' }))
    .pipe(connect.reload());
});

gulp.task('jshint', function(){
  return gulp.src(files.script.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(notify({ title: 'JSHint Done', message: 'Checked JS with JSHint ✔' }));
});

// Images
gulp.task('imagemin', function() {
  return gulp.src(files.image.src)
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest(path.image.dest))
    .pipe(notify({ title: 'Done', message: 'Converted Images ✔' }))
    .pipe(connect.reload());
});


// Watch
gulp.task('watch', function() {
  // Watch .JADE
  gulp.watch(files.template.src, ['jade'])
  // Watch .SCSS
  gulp.watch(files.style.src, ['sass'])
  // Watch .JS
  gulp.watch(files.script.src, ['jshint', 'scripts'])
  // Watch Images
  gulp.watch(files.image.src, ['imagemin'])
});


// Clean
gulp.task('clean', function(cb) {
  del([files.template.dest, files.style.dest, files.script.dest], cb)
  gutil.log(gutil.colors.red('Cleaning!'));
});

// Build
gulp.task('build', ['sass', 'jshint', 'scripts'], function() {
  gulp.start('jade', 'imagemin');
  gutil.log(gutil.colors.yellow('Building!'))
});

// Serve task
gulp.task('serve', ['connect', 'open', 'watch']);


// Default task
gulp.task('default', ['clean', 'build'], function() {
  gulp.start('connect', 'open', 'watch');
});