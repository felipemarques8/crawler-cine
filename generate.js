module.exports = function (callback) {
  var i;
  var urls = [];

  for (i = 1500; i <= 1700; i++) {
    urls.push({
      id: i,
      url: "http://lista.g5iptv.space:2095/get.php?username=" + i + "&password=" + i + "&type=m3u"
    });
   
    if (i === 1700) {
      callback(urls);
    }
  }
};

