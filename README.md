Infinite RSS
=========================

URL-configurable RSS feed generator for testing feed-eating bots.

Supported query string parameters:

* feedTitle: The title of the feed

* itemTitleBase: The base title for each item. The item index will be appended to it, eg: A value of "Article #" will result in items titled "Article #0", "Article #1", etc.

Usage:

Open the URL in your browser, and optionally pass parameters to create a custom feed.

```
https://infinite-rss.glitch.me/?feedTitle=Cool%20RSS%20Feed&itemTitleBase=This%20is%20an%20article%20title
```
