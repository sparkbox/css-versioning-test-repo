const chokidar = require('chokidar');
const shell = require('shelljs');

chokidar.watch(['src/markup/**/*', 'src/data/**/*']).on('change', () => {
  shell.exec('npm run patterns');
});

chokidar.watch('src/public/**/*').on('change', () => {
  shell.exec('npm run copy');
});

chokidar.watch('src/svg/**/*').on('change', () => {
  shell.exec('npm run svg-sprite');
});
