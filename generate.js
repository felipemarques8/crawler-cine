module.exports = function (callback) {
  var i;
  var urls = [];

  for (i = 321; i <= 421; i++) {
    urls.push({
      id: i,
      url: "http://maxptv.ddns.net:25461/get.php?username=" + i + "&password=" + i + "&type=m3u&output=ts"
    });
   
    if (i === 421) {
      callback(urls);
    }
  }
};

