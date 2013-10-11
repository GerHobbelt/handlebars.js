var hb = require('handlebars');
var fs = require('fs');

var file = process.argv[2];

if (!file) {
  console.log('No file argument');
  process.exit(1);
}

fs.readFile(file, function (error, data) {
  if (error) {
    console.log('File error');
    process.exit(1);
  }

  try {
    var tmp = hb.parse(data);
  }
  catch (e) {
    console.log(e);
    process.exit(1);
  }
});

process.exit(0);



// console.log(process.argv[2]);


// try {
// var o = hb.parse(tmpl);

// console.log(o);
// }
// catch (e) {
//   // console.log(e);
//   // echo e.name;
//   // echo "----";
//   // echo e.message;
// }
