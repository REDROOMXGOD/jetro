const { src, dest, watch, series } = require("gulp");
const pug = require("gulp-pug");
const svgSprite = require("gulp-svg-sprite");
const server = require("browser-sync").create();
const del = require("del");
const imagemin = require("gulp-imagemin");

function readyReload(cb) {
  server.reload();
  cb();
}

const pugPath = "./pug/**/*.pug";

function pugToHtml() {
  return src([pugPath, "!./pug/components/*.pug"])
    .pipe(pug())
    .pipe(dest("../dist"));
}

const svgPath = "./images/*.svg";

function svgToSprite() {
  return src(svgPath)
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: "../sprite.svg",
          },
        },
      })
    )
    .pipe(dest("../dist/images"));
}

function js() {
  return src(["./js/**"]).pipe(dest("../dist/js"));
}

function css() {
  return src(["./css/**"]).pipe(dest("../dist/css"));
}

function images() {
  return src("./images/*.{jpg,jpeg,png}")
    .pipe(imagemin())
    .pipe(dest("../dist/images"));
}

async function delDist() {
  await del("../dist", { force: true });
}

async function customBuild(...fns) {
  await delDist();
  fns.forEach((fn, i) => fn());
}

exports.default = function () {
  server.init({
    server: "../dist",
    notify: false,
    open: true,
    cors: true,
  });
  customBuild(pugToHtml, svgToSprite, css, js, images);
  watch([pugPath, "./pug/**/*.pug"], series(pugToHtml, readyReload));
  watch(svgPath, series(svgToSprite, readyReload));
  watch("./js/", series(js, readyReload));
  watch("./css/", series(css, readyReload));
  watch("./images", series(images, readyReload));
};
