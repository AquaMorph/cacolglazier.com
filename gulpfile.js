var gulp = require('gulp'),
    ftp = require('vinyl-ftp'),
    gutil = require('gulp-util');


gulp.task('deploy', function() {
    var connection = ftp.create({
        host: args.url,
        user: args.user,
        password: args.password,
        log: gutil.log
    });

    return gulp.src('public/**')
        .pipe(connection.newer('/'))
        .pipe(connection.dest('/'));
});