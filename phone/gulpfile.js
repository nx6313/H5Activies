const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps'); // 来源地图
const cssmini = require('gulp-minify-css');
const concat = require('gulp-concat');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const sass = require('gulp-sass');
const htmlmin = require('gulp-htmlmin');
const jshint = require("gulp-jshint");
const autoprefixer = require('gulp-autoprefixer'); // 自动添加CSS3浏览器前缀
const livereload = require('gulp-livereload'); // 网页自动刷新（文件变动后即时刷新页面）
const webserver = require('gulp-webserver'); // 本地服务器
const fileinclude = require('gulp-file-include');
//const sftp = require('gulp-sftp');//ftp
const ftp = require('gulp-ftp'); //ftp
const classes = [];
// 编译并压缩js
gulp.task('convertJS', function () {
	gulp.src('src/js/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(sourcemaps.init()) // 执行sourcemaps
		.pipe(uglify())
		.pipe(sourcemaps.write('maps')) // 地图输出路径（存放位置）
		.pipe(gulp.dest('dist/js'));
})

gulp.task('sass', function () {
	gulp.src('src/scss/*.scss')
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'], // 主流浏览器的最新两个版本
			cascade: true // 是否美化属性值
		}))
		.pipe(gulp.dest('src/css'));
});

// 合并并压缩css
gulp.task('convertCSS', function () {
	gulp.src('src/css/*.css')
		.pipe(concat('css.css'))
		.pipe(cssmini())
		.pipe(rename(function (path) {
			path.basename += '.min';
		}))
		.pipe(gulp.dest('dist/css'));
})

// 转移img
gulp.task('copyImg', function () {
	gulp.src('src/imgs/*.*')
		.pipe(gulp.dest('dist/imgs'));
})

//html压缩
gulp.task('htmlsourcemin', function () {
	let options = {
		removeComments: true, //清除HTML注释
		collapseWhitespace: false, //压缩HTML
		collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
		removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
		removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
		removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
		minifyJS: true, //压缩页面JS
		minifyCSS: true //压缩页面CSS
	};

	gulp.src('src/html/*')
		.pipe(fileinclude({ //includefile
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(htmlmin(options))
		.pipe(gulp.dest('./dist/html'));
});
//html压缩
gulp.task('htmlmin', function () {
	let options = {
		removeComments: true, //清除HTML注释
		collapseWhitespace: false, //压缩HTML
		collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input />
		removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
		removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
		removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
		minifyJS: true, //压缩页面JS
		minifyCSS: true //压缩页面CSS
	};

	gulp.src('src/*.html')
		.pipe(fileinclude({ //includefile
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(htmlmin(options))
		.pipe(gulp.dest('./dist'));
});
//检查js文档语法
gulp.task('jsLint', function () {
	gulp.src('js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter()); // 输出检查结果
});

// 静态服务器
gulp.task('webserver', function () {
	setTimeout(function () {
		gulp.src('./dist') // 服务器目录（.代表根目录）
			.pipe(webserver({ // 运行gulp-webserver
				livereload: true, // 启用LiveReload
				open: true // 服务器启动时自动打开网页
			}));
	}, 500);
});
// 监视文件变化，自动执行任务
gulp.task('watch', function () {
	gulp.watch('src/scss/*.scss', ['sass']);
	gulp.watch('src/css/*.css', ['convertCSS']);
	gulp.watch('src/js/*.js', ['jsLint', 'convertJS', 'browserify']);
	gulp.watch('src/imgs/*.*', ['copyImg']);
	gulp.watch('src/html/*', ['htmlsourcemin']);
	gulp.watch('src/*.html', ['htmlmin']);
	gulp.watch('dist/*', ['ftp']);
});

gulp.task('ftp', function () {
	/*    return gulp.src('dist/**')
	        .pipe(ftp({
	            host: '127.0.0.1',
	            user: 'test',
	            pass: 'test',
	            port:'21'
			}));*/
});

// browserify 定义程序入口
gulp.task("browserify", function () {
	browserify({
			entries: "dist/js/index.js"
		}).bundle()
		.pipe(source("index.js"))
		.pipe(gulp.dest("dist/js"));
});

gulp.task('default', ['ftp', 'convertJS', 'convertCSS', 'sass', 'copyImg', 'htmlsourcemin', 'htmlmin', 'browserify', 'watch', 'webserver']);