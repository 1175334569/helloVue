module.exports={
    devServer: {
        port: 8082,
        proxy: {
            '/': {
                target: 'http://localhost:8083',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/': ''  // rewrite path
                }
            },
        }
    }
};