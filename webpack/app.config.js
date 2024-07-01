// app config
module.exports = [
  {
    name: 'popup',
    entry: './src/popup/index.ts',
    page: 'public/popup.html',
    build: true,
  },
  {
    name: 'options',
    entry: './src/options/index.tsx',
    page: 'public/options.html',
  },
  {
    name: 'devtools',
    entry: './src/devtools/index.ts',
    page: 'public/devtools.html',
  },
  {
    name: 'panel',
    entry: './src/panel/index.tsx',
    page: 'public/panel.html',
  },
  {
    name: 'sidebar',
    entry: './src/sidebar/index.tsx',
    page: 'public/sidebar.html',
  },
  {
    name: 'background',
    entry: './src/background.ts',
  },
  {
    name: 'inject_script',
    entry: './src/inject_script.ts',
  },
]
