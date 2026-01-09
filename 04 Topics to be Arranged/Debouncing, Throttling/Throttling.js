let lastTime = 0;

function throttle(fn, limit) {
  const now = Date.now();
  if (now - lastTime >= limit) {
    fn();
    lastTime = now;
  }
}


/*
🎯 What Happens When User Types?

Typing: H E L L O quickly
Keys pressed maybe 20 times in 1 second.

With throttling:

Runs immediately on first key

Then runs again only after 500ms

Even if 100 keypress events fire
*/