module.exports = {
    plugins: {
        autoprefixer: {},
        'postcss-px-to-viewport': {
            unitToConvert: 'px',
            viewportWidth: 375,
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: ['tab-bar-item'],
            minPixelValue: 1,
            mediaQuery: false,
            exclude: [/$tabbar\.vue/]
        }
    }
}