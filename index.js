var PSD = require('psd');
// var detect = require('charset-detector');
var Buffer = require('buffer').Buffer;
var Iconv = require('iconv').Iconv;
var assert = require('assert');


var PSD_FILE = "psd-export-sample.psd";

// You can also use promises syntax for opening and parsing
PSD.open(PSD_FILE).then(function(psd) {
  // console.log(psd.tree());
  node = psd.tree().descendants()[1];
  console.log(JSON.stringify(psd.tree().export(), null, 4));
  saveToImage(psd);
});

function saveToImage(psd) {
  var png = psd.image.toPng(); // get PNG object
  psd.image.saveAsPng('output.png').then(function() {
    console.log('Exported!');
  });
}

