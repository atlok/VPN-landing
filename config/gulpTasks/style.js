import {src, dest} from 'gulp'
import {Path} from '../gulp.path'
import scss from 'gulp-sass'
import bs from 'browser-sync'

export const Style = (cb) => {
    src(Path.scss.src)
        .pipe(scss())
        .pipe(dest(Path.scss.dst))
        .pipe(bs.reload({stream: true}))
    cb()
}