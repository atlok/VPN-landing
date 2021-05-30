import {src, dest} from 'gulp'
import {Path} from '../gulp.path'
import image from 'gulp-image'
import bs from 'browser-sync'

export const Image = (cb) => {
    src(Path.image.src)
        .pipe(image({
            svgo: true,
        }))
        .pipe(dest(Path.image.dst))
        .pipe(bs.reload({stream: true}))
    cb()
}