var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync').create();

gulp.task('run', ['styles', 'optimizepng', 'browser-sync'], function(){
    gulp.watch('src/assets/css/*.css', ['styles']);
});

gulp.task('styles', function(){
    gulp.src('src/assets/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({
            compatibility: 'ie10',
            advanced: true
            })
        )
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(browserSync.stream());
});

gulp.task('optimizepng', function(){
  gulp.src('src/assets/icons/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/assets/icons'));
});

gulp.task('browser-sync', function(){
    browserSync.init({
        server: "./",
    });
});
