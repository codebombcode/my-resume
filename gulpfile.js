var gulp=require('gulp');
var path=require('path');
var webpack=require('webpack');
var gulpWebpack=require('gulp-webpack');
var open=require('open');
var del=require('del');

var webpackDevServer=require('webpack-dev-server');
var webpackDevConfig=require('./webpack.config.js');

// var start=require('./bundle.js');

//启用webpack
gulp.task('dev',function(){
	var compiler = webpack(webpackDevConfig);
	new webpackDevServer(compiler,{
		contentBase:'./',
		historyApiFallback:true,
		hot:true,
		noInfo:false,
	}).listen(8888,function(err){
		console.log('listening: http://127.0.0.1:' + " is success");
		open('http://127.0.0.1:'+'8888'+'/webpack-dev-server/src/app/index.html');
	});

});

//你也许会想要在编译文件之前删除一些文件
gulp.task('clean', function(cb) {
    return del(['build/**/*'], cb);
});

gulp.task("build",['clean'],function () {
	 gulp.src(filePath.srcPath)
		.pipe(gulpWebpack(webpackDevConfig))//暂时用webpackDevConfig，上线的时候改成webpackDistConfig
		.pipe(gulp.dest('build/'));
	//模板引擎文件特殊处理
	// gulp.src("./src/back/tpl/build/template.js")
	// 	.pipe(gulp.dest("build/"));
})




gulp.task('default',['dev'],function(){
	console.log('success')
});