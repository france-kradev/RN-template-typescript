module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [ 'module-resolver', {
        alias: {
          components: './src/components',
          constants: './src/constants',
          theme: './src/theme',
          redux: './src/redux',
          lib: './src/lib',
        }
      }]
    ]
  };
};
