const request = require('request');
const async = require('async');
const fs = require('fs');
const generate = require('./generate');

generate(function (urls) {
  var q = async.queue(bulkProcess);

  q.push(urls);

  q.drain = function () {
    console.log('Terminou');
  }

  function bulkProcess(data, callback) {
    console.log('Iniciando', data.id);


    request.get({
      url: data.url
    }, function optionalCallback(err, httpResponse, body) {
      var absolutePath = 'files/' + data.id + '.m3u';

      if (err || !body) {
        callback(null, true);
        return
      }

      console.log('Encontrado');

      fs.writeFile(absolutePath, body, 'binary', function (err) {
        if (err) {
          console.log('ERROR salved' + data.id, err);
          callback(null, true);
          return;
        }

        callback(null, true);
      });

    });
  }
});