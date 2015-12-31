var ftp = require('vinyl-ftp');
var gutil = require('gulp-util');
var minimist = require('minimist');
var args = minimist(process.argv.slice(2));

gulp.task('deploy', function() {
    var conn = ftp.create({
        host: args.url,
        user: args.user,
        password: args.password,
        log: gutil.log
    });

    var output = 'public/**';

    return gulp.src(output, {
        base: './public',
        buffer: false
    })
    .pipe(connection.newer('/'))
    .pipe(connection.dest('/'));
});