/**
 * Created by sunqian on 2016/1/12.
 */

var gulp = require("gulp"),
    browserify = require("gulp-browserify"),
    connect = require("gulp-connect"),
    concat = require("gulp-concat"),
    react = require("gulp-react"),
    livereload = require("gulp-livereload"),
    port = process.env.porlt || 5000;

gulp.task("browserify", function(){
    gulp.src("./js/main.js")
        .pipe(browserify({
            transform: ["reactify"]
        }))
        .pipe(gulp.dest("./dist/js"));
});

//live load
gulp.task("connect", function(){
    connect.server({
        "root": "./",
        "liveload": true,
        "port": port
    });
});

//reload js
gulp.task('js', function(){
    gulp.src("./js/*.js")
        .pipe(connect.reload());
});
//reload html
gulp.task("html", function(){
    gulp.src("./app/*.html")
        .pipe(connect.reload())
        .pipe(livereload());
});

//watch
gulp.task("watch", function(){
    gulp.watch("./app/*.html",["html"]);
    gulp.watch("./dist/*.js",["js"]);
    gulp.watch("./js/*.js",["browserify"]);
});
//default
gulp.task("default", ['browserify']);
//server
gulp.task("server", ['browserify', 'watch', 'connect']);