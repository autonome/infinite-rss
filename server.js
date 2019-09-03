const RSS = require('rss');
const express = require('express');
const app = express();

function configureFeed(feedTitle, itemTitleBase, itemCount) {
  let feed = new RSS({
      title: feedTitle || 'Feed Title',
      description: 'URL-configurable RSS feed generator for testing feed-eating bots. Source code at https://github.com/autonome/infinite-rss',
      feed_url: 'https://infinite-rss.glitch.me/',
      site_url: 'https://github.com/autonome/infinite-rss',
      image_url: 'https://cdn.glitch.com/0aa3ee32-12ac-4d7c-878b-5c7f22e228d1%2Ffeed-icon.svg?1507032662337',
      managingEditor: 'Dietrich Ayala',
      webMaster: 'Dietrich Ayala',
      language: 'en',
      categories: ['Category 1','Category 2','Category 3'],
      pubDate: (new Date()),
      ttl: '60'
  });

  for (let i = 0; i < (itemCount|| 10); i++) {
    feed.item({
        title:  (itemTitleBase || 'Article #') + i,
        description: 'Article description!',
        url: 'https://infinite-rss.glitch.me/article/' + i,
        date: (new Date())
    });
  }
  
  return feed;
}

app.get("/", function (request, response) {
  response.set('Content-Type', 'application/rss+xml');
  var feed = configureFeed(request.query.feedTitle, request.query.itemTitleBase, request.query.itemCount)
  var xml = feed.xml();
  response.send(xml);
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});