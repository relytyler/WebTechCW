var RSSCombiner = require('rss-combiner');

var feedConfig = {
  title: 'Latest NBA news from around the web',
  size: 20,
  feeds: [],
  pubDate: new Date()

  // Promise usage
};RSSCombiner(feedConfig).then(function (combinedFeed) {
  var xml = combinedFeed.xml();
});

// Node callback usage
RSSCombiner(feedConfig, function (err, combinedFeed) {
  if (err) {
    console.error(err);
  } else {
    var xml = combinedFeed.xml();
  }
});