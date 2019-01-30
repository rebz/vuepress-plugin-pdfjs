const path = require('path')

module.exports = (options, ctx) => ({

    name: 'pdfjs',

    enhanceAppFiles: [
        path.resolve(__dirname, 'enhanceAppFile.js')
    ],

    ready () {
        console.log('vuepress-plugin-pdfjs ready!')
    },

    generated() {
        console.log('vuepress-plugin-pdfjs generated!')
    }
})