var karma = require('karma').server,
    gulp = require('gulp'),
    mocha = require('gulp-mocha'),
    jshint = require('gulp-jshint'),
    header = require('gulp-header'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    browserify = require('gulp-browserify'),
    fs = require('fs'),
    del = require('del'),
    jsonfile = require('jsonfile');

gulp.task('lint', function () {
    return gulp
        .src('./src/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('clean', ['lint'], function (cb) {
    del(['dist'], cb);
});

gulp.task('bundle', ['clean'], function () {
    return gulp
        .src('./src/sister.js')
        .pipe(browserify({
            //debug : true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('version', ['bundle'], function () {
    var name = 'sister',
        pkg = jsonfile.readFileSync('./package.json'),
        bower = jsonfile.readFileSync('./bower.json');

    gulp
        .src('./dist/' + name + '.js')
        .pipe(header('/**\n * @version <%= version %>\n * @link https://github.com/gajus/' + name + ' for the canonical source repository\n * @license https://github.com/gajus/' + name + '/blob/master/LICENSE BSD 3-Clause\n */\n', {version: pkg.version}))
        .pipe(gulp.dest('./dist/'))
        .pipe(uglify())
        .pipe(rename(name + '.min.js'))
        .pipe(header('/**\n * @version <%= version %>\n * @link https://github.com/gajus/' + name + ' for the canonical source repository\n * @license https://github.com/gajus/' + name + '/blob/master/LICENSE BSD 3-Clause\n */\n', {version: pkg.version}))
        .pipe(gulp.dest('./dist/'));

    bower.name = pkg.name;
    bower.description = pkg.description;
    bower.version = pkg.version;
    bower.keywords = pkg.keywords;
    bower.license = pkg.license;
    bower.authors = [pkg.author];

    jsonfile.writeFileSync('./bower.json', bower);
});

gulp.task('watch', function () {
    gulp.watch(['./src/*', './tests/*', './package.json'], ['default']);
});

gulp.task('test', ['version'], function () {
    return gulp
        .src('./tests/*.js', {read: false})
        .pipe(mocha());
});

gulp.task('default', ['test']);