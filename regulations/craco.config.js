module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const nodeUnrarPattern = /[\\/]node_modules[\\/]node-unrar-js[\\/]/;
      const isSourceMapLoader = (entry) => {
        if (!entry) {
          return false;
        }

        if (typeof entry === 'string') {
          return entry.includes('source-map-loader');
        }

        return typeof entry.loader === 'string' && entry.loader.includes('source-map-loader');
      };

      // node-unrar-js publishes sourcemap references that are not shipped in npm tarballs.
      (webpackConfig.module?.rules || []).forEach((rule) => {
        if (rule.enforce !== 'pre') {
          return;
        }

        const uses = Array.isArray(rule.use) ? rule.use : rule.use ? [rule.use] : [];
        if (!isSourceMapLoader(rule.loader) && !uses.some(isSourceMapLoader)) {
          return;
        }

        if (!rule.exclude) {
          rule.exclude = [nodeUnrarPattern];
          return;
        }

        if (Array.isArray(rule.exclude)) {
          rule.exclude.push(nodeUnrarPattern);
          return;
        }

        rule.exclude = [rule.exclude, nodeUnrarPattern];
      });

      webpackConfig.ignoreWarnings = [
        ...(webpackConfig.ignoreWarnings || []),
        (warning) =>
          typeof warning?.message === 'string' &&
          warning.message.includes('Failed to parse source map') &&
          warning.message.includes('node-unrar-js'),
      ];

      // Only apply optimizations in production
      if (env === 'production') {
        // Enhanced code splitting
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              // Vendor libraries (React, React-DOM, etc.)
              vendor: {
                test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
                name: 'vendor',
                chunks: 'all',
                priority: 10,
              },
              // PDF and report libraries (loaded on demand)
              pdfLibs: {
                test: /[\\/]node_modules[\\/](react-pdf|jspdf|jspdf-autotable)[\\/]/,
                name: 'pdf-libs',
                chunks: 'async',
                priority: 8,
              },
              // ZIP processing libraries
              zipLibs: {
                test: /[\\/]node_modules[\\/](jszip|file-saver)[\\/]/,
                name: 'zip-libs',
                chunks: 'all',
                priority: 7,
              },
              // Other node_modules
              commons: {
                test: /[\\/]node_modules[\\/]/,
                name: 'commons',
                chunks: 'all',
                priority: 5,
                minChunks: 2,
              },
              // App code
              default: {
                minChunks: 2,
                priority: 1,
                reuseExistingChunk: true,
              },
            },
          },
        };

        // Preload critical chunks
        webpackConfig.optimization.runtimeChunk = {
          name: 'runtime',
        };
      }

      return webpackConfig;
    },
  },
};
