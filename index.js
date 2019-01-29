const { path } = require('@vuepress/shared-utils')

module.exports = (options, ctx) => {

    return {
        name: 'pdfjs',
        enhanceAppFiles: [
            path.resolve(__dirname, 'enhanceAppFile.js')
        ],
        generated() {
            console.log('vuepress-plugin-pdfjs generated!')
        }
    }
}