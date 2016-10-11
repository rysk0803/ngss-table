gulp         = require 'gulp'

sass         = require 'gulp-sass'          #sassのコンパイラ
autoprefixer = require 'gulp-autoprefixer'  #ベンダープレフィックスの自動付与
cleancss     = require 'gulp-clean-css'     #cssのminify

uglify       = require 'gulp-uglify'        #javascriptのminify

watch        = require 'gulp-watch'         #ファイル追加/更新/削除の監視（gulp.watchが更新のみだったので乗換）
concat       = require 'gulp-concat'        #ファイル結合
runsequence  = require 'run-sequence'       #タスクの実行（直列/並列）gulp4.0以降はもっとすっきりするはず

cssMinifyFileName = 'ngss-table.min.css'
jsUglifyFileName = 'ngss-table.min.js'

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
 .pipe gulp.dest 'dist'

# concat javascript sources and uglify
gulp.task 'uglify', ->
  gulp.src 'src/js/*.js'
  .pipe concat jsUglifyFileName
  .pipe uglify {mangle: false, preserveComments: 'some'}
  .pipe gulp.dest 'dist'

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
# default task
gulp.task 'default', ['watch']
