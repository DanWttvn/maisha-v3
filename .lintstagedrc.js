module.exports = {
  '*.{js,ts,tsx}': ["eslint --ignore-pattern '!*' --fix --max-warnings=0"],
  '*.{html,md,json,yml}': ['prettier --write'],
  'styles.ts': 'stylelint',
  '*.svg': ['prettier --write --parser html'],
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
