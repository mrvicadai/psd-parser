var PSD = require('psd');

var PSD_FILE = "psd-export-sample.psd";

// You can also use promises syntax for opening and parsing
PSD.open(PSD_FILE).then(function(psd) {
  console.log(psd.tree());
  // console.log(psd.image);
}).then(function() {
  console.log("Finished!");
});

