module.exports = function (callback) {
  var i;
  var urls = [];

  for (i = 200; i <= 1200; i++) {
    urls.push({
      id: i,
      url: "http://cdnmedia.me/get.php?username=" + i + "&password=" + i + "&type=m3u&output=ts"
    });
   
    if (i === 1200) {
      callback(urls);
    }
  }
};

