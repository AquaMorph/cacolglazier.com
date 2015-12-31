var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var args = minimist(process.argv.slice(2));

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