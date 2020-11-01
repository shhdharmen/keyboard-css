const del = require('del');

(async () => {
  const deletedFilePaths = await del([
    'src/copy/**',
    '!src/copy',
    '!src/copy/index.html',
    '!src/copy/assets/**',
  ]);

  console.log('Deleted files:\n', deletedFilePaths.join('\n'));
})();
