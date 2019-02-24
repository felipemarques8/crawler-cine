module.exports = function (callback) {
  var i;
  var urls = [];

  for (i = 1000; i <= 2000; i++) {
    urls.push({
      id: i,
      url: "http://listaccess.me:8880/get.php?username=" + i + "&password=" + i + "&type=m3u&output=ts"
    });
   
    if (i === 2000) {
      callback(urls);
    }
  }
};

