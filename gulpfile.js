var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();

// scripts task
// uglifies
gulp.task('scripts',function(){
    gulp.src('js/*.js')
    .pipe(uglify())
    // .pipe(gulp.dest('build/js'));
    .pipe(gulp.dest('minjs'));
});

// styles task
// uglifies
gulp.task('styles',function(){
    return sass('scss/*.scss')
    .pipe(sourcemaps.init())
    .on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream());
});

// watch task
// watches js
gulp.task('watch',function(){
    gulp.watch('js/*.js',['scripts']);
    gulp.watch('scss/*.scss',['styles']);
})

// function reload(done) {
//     browserSync.reload();
//     done();
// }

// default run
gulp.task('default',['scripts','styles','watch']);