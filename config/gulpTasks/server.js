import bs from 'browser-sync'


export const Server = () => {
    bs.init({
        server: {
            baseDir: './build/',
            index: './index.html'
        },
        notify: false
    })
}
