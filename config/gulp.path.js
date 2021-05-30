export const Path = {
    build: './build',
    pug: {
      src: ['./index.pug', './section/*.pug', './mixin/*.pug'],
      dst: './build',
      watch: ['./index.pug', './section/*.pug']
    },
    scss: {
        src: './assets/scss/**/*.scss',
        dst: './build/assets/css/',
        watch: './assets/scss/**/*.scss'
    },
    image: {
        src: './assets/img/**/*',
        dst: './build/assets/img/',
        watch: './assets/img/**/*.{png,jpg,jpeg,gif,svg}'
    }
}