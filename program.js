var filterModule = require('./filterFunction.js');
filterModule(function (err, data, callback) {
  if (err) {
    return callback(err);
  }
  callback(null, data);
}
