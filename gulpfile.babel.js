import {parallel, series} from 'gulp'
import {Server} from './config/gulpTasks/server'
import {Pug} from './config/gulpTasks/pug'
import {Style} from './config/gulpTasks/style'
import {Image} from './config/gulpTasks/image'
import {watchFiles} from './config/gulpTasks/watch'


const Build = series(
    series(Pug, Style, Image),
    parallel(Server, watchFiles)
)

exports.default = Build;