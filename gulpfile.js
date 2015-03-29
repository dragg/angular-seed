var gulp = require('gulp');
var concat = require('gulp-concat');
var paths = require('./gulp.config.json');

gulp.task('default', ['js', 'copyindex', 'copytemplates'],function() {

});

gulp.task('js', function() {
    return gulp.src([].concat(paths.js))
     .pipe(concat('app.js'))
     .pipe(gulp.dest('./public/build/js/'));
});

gulp.task('copyindex', function() {
    return gulp.src('./resources/assets/app/index.html')
        .pipe(gulp.dest(paths.build.index));
});

gulp.task('copytemplates', function() {
    return gulp.src(['./resources/assets/app/**/*.html', '!./resources/assets/app/index.html'])
        .pipe(gulp.dest(paths.build.views));
});
