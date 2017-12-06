var filewatcher = require('filewatcher');

var watcher = filewatcher();

// watch a file
watcher.add('note.txt');

// ... or a directory
//watcher.add(__dirname);

watcher.on('change', function(file, stat) {
  console.log('File modified: %s', file);
  //console.log(stat);
  if(stat) {
    if(stat.size > 0) {
        console.log('New logs found in file name ' + file);
    }
  }
  if (!stat) console.log(file + ' deleted.');
});