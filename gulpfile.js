var del = require("del");
var gulp = require("gulp");
var ghpages = require("gh-pages");
var nodemon = require("gulp-nodemon");
var path = require("path");

var SRC_PATH = "./src/";
var DIST_PATH = "./dist/";

gulp.task("deploy", ["build"], function (cb) {
  return ghpages.publish(path.join(__dirname, "dist"), { branch: "master" }, function () {
    cb();
  });
});

gulp.task("build", function () {
  var filesToCopy = [
    "*"
  ];

  return gulp.src(filesToCopy, { cwd: SRC_PATH + "/**"  }).pipe(gulp.dest(DIST_PATH));
});

gulp.task("clean", function () {
  return del(DIST_PATH);
});

gulp.task("server", ["build"], function () {
  return nodemon({
    script: "server.js",
    ext: "js html css",
    watch: [SRC_PATH],
    tasks: ["build"]

  }).on("restart", function () {
    console.log("restarted!");
  });
});
