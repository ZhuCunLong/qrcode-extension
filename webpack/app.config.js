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
    entry: './src/options/index.ts',
    page: 'public/options.html',
    build: true,
  },
  {
    name: 'devtools',
    entry: './src/devtools/index.ts',
    page: 'public/devtools.html',
    build: true,
  },
  {
    name: 'panel',
    entry: './src/panel/index.ts',
    page: 'public/panel.html',
  },
  {
    name: 'sidebar',
    entry: './src/sidebar/index.ts',
    page: 'public/sidebar.html',
  },
  {
    name: 'background',
    entry: './src/background.ts',
    build: true,
  },
  {
    name: 'inject_script',
    entry: './src/inject_script.ts',
  },
]
