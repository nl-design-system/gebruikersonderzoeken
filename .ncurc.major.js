const minorConfig = require('./.ncurc.minor');

module.exports = {
  ...minorConfig,
  reject: ['@mdx-js/react', ...minorConfig.reject],
  target: 'latest',
};
