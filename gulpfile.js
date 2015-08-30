var   gulp      = require('gulp')
    , rjs       = require('gulp-requirejs')
    , less      = require('gulp-less')
    ;

var requirejsConf = require('./config/require-config.json');


gulp.task('default', ['rjs', 'less', 'watch']);

gulp.task('rjs', function() {
    rjs(requirejsConf)
        .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function(){
    gulp.watch(['./app/scripts/**/*', './config/require-config.json'], ['rjs']);
    gulp.watch('./app/**/*.less', ['less']);
});

gulp.task('less', function(){
    return gulp.src('./app/less/index.less')
        .pipe(less({compress: true, sourceMap: true}))
        .pipe(gulp.dest('./public/css'));
});