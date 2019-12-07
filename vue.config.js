module.exports={
    devServer: {
        port: 8080,
        proxy: {
            '/': {
                target: 'http://localhost:8081',  // target host
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/': ''  // rewrite path
                }
            },
        }
    }
};