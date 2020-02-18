module.exports = {
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    indexPath: 'index.html',
    filenameHashing: true,
    lintOnSave: process.env.NODE_ENV === 'production',
    runtimeCompiler: false,
    productionSourceMap: true,
    integrity: false,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = 'dashboard';
                return args;
            });
    },
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
                '@': 'src'
            }
        }
    },

    // css相关配置
    css: {
        extract: process.env.NODE_ENV === 'production',
        sourceMap: false,
        loaderOptions: {},
        requireModuleExtension: true
    },

    devServer: {
        port: 8710,
        // host: "localhost",
        https: false,
        open: true,
        before: app => {
        }
    },
    // pages: {
    //     index: {
    //         // page 的入口
    //         entry: 'src/main.js',
    //         // 模板来源
    //         template: 'public/index.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'index.html',
    //         // 当使用 title 选项时，
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: 'Index Page',
    //         // 在这个页面中包含的块，默认情况下会包含
    //         // 提取出来的通用 chunk 和 vendor chunk。
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']
    //     },
    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    //     subpage: 'src/subpage/main.js'
    // },
    // 构建时开启多进程处理 babel 编译
    parallel: require('os').cpus().length > 1
};
