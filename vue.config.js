// eslint-disable-next-line no-undef
const { defineConfig } = require('@vue/cli-service')
// eslint-disable-next-line no-undef
const webpack = require('webpack');

// eslint-disable-next-line no-undef
module.exports = defineConfig({
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                // Vue CLI is in maintenance mode, and probably won't merge my PR to fix this in their tooling
                // https://github.com/vuejs/vue-cli/pull/7443
                __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
            })
        ],
    },
});