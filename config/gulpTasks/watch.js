import {watch} from 'gulp'
import {Pug} from "./pug";
import {Style} from "./style";
import {Image} from "./image";
import {Path} from "../gulp.path";


export const watchFiles = (cb) => {
    watch(Path.pug.watch, Pug)
    watch(Path.scss.watch, Style)
    watch(Path.image.watch, Image)
    cb()
}