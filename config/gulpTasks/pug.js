import {src, dest} from 'gulp'
import pug from 'gulp-pug'
import {Path} from '../gulp.path'
import bs from "browser-sync";

export const Pug = (cb) => {
    src(Path.pug.src)
        .pipe(pug({
            pretty: '    '
        }))
        .pipe(dest(Path.pug.dst))
        .pipe(bs.reload({stream: true}))
    cb()
}