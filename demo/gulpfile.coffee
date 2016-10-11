gulp         = require 'gulp'

sass         = require 'gulp-sass'          #sassのコンパイラ
nodesass     = require 'node-sass'          #sassのコンパイラ（riotでsassを使うための措置）
autoprefixer = require 'gulp-autoprefixer'  #ベンダープレフィックスの自動付与
cleancss     = require 'gulp-clean-css'     #cssのminify

uglify       = require 'gulp-uglify'        #javascriptのminify

webserver    = require 'gulp-webserver'     #簡易Webサーバ
livereload   = require 'gulp-livereload'    #livereload : chromeはlivereloadプラグインをインストール要，IE11はそのままOK

zip          = require 'gulp-zip'           #zipファイル作成
watch        = require 'gulp-watch'         #ファイル追加/更新/削除の監視（gulp.watchが更新のみだったので乗換）
concat       = require 'gulp-concat'        #ファイル結合
runsequence  = require 'run-sequence'       #タスクの実行（直列/並列）gulp4.0以降はもっとすっきりするはず

# spa全体のcss
cssMinifyFileName = 'app.min.css'
#spa全体のjsファイル
jsUglifyFileName = 'app.min.js'
#zipにパッケージする場合の成果物path
packageSrc = ['./bower_components/**/*', './dist/**/*', './img/**/*','./*.html', './html/**/*']
#zipパッケージ名
packageName = 'app.zip'

# webserver configration
portNo = '9002'
fallback = 'index.html'

gulp.task 'sass', ->
 gulp.src 'src/sass/**/*.scss'
  .pipe do sass
  .pipe autoprefixer {
			browsers: ['last 2 versions'],
			cascade: false
  }
  .pipe gulp.dest 'src/css'

# minify css
gulp.task 'minify', ->
 gulp.src 'src/css/*.css'
 .pipe concat cssMinifyFileName
 .pipe do cleancss
 .pipe gulp.dest 'dist/css'

# concat javascript sources and uglify
gulp.task 'uglify', ->
  gulp.src 'src/js/*.js'
  .pipe concat jsUglifyFileName
  .pipe uglify {mangle: false, preserveComments: 'some'}
  .pipe gulp.dest 'dist/js'

# run the webserver for development (livereload with chrome)
gulp.task 'webserver', ->
 gulp.src './'
 .pipe webserver {
   livereload: true,
   port: portNo,
   fallback: fallback,
   open: false
 }

# ccdate zip file
gulp.task 'zip', ->
  gulp.src packageSrc, { base: '.' }
   .pipe zip packageName
   .pipe gulp.dest 'target'

# watch task for livereload
gulp.task 'watch', ->
 watch ['src/sass/**/*.scss'], () -> gulp.start 'sass',
 watch ['src/css/*.css'], () -> gulp.start 'minify',
 watch ['src/js/*.js'], () -> gulp.start 'uglify'
# tasks
# build javascript
gulp.task 'jsbuild', ->
 runsequence ['uglify']

# build css
gulp.task 'cssbuild', ->
 runsequence 'sass',
             'minify'

# package
gulp.task 'package', ->
  runsequence 'sass',
              ['uglify','minify'],
              'zip'

# default task
gulp.task 'default', ['webserver','watch']
