const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['@monorepo/design-system', '@monorepo/utils']);

module.exports = withPlugins([withTM], {
    // ... 
});