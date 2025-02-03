const minorConfig = require('./.ncurc.minor.cjs');

module.exports = {
  ...minorConfig,
  reject: [...minorConfig.reject, 'react', '@types/react', 'react-dom', '@types/react-dom'],
  target: 'latest',
};
