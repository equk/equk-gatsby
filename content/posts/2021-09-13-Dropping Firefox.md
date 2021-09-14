---
slug:
title: "Dropping Firefox"
date: 2021-09-13T19:06:54.499Z
draft: false
author: equilibriumuk
tags:
  - github
  - firefox
  - javascript
image: ../../static/media/images/firefox_large_logo.png
---

I have used Mozilla Firefox as my main browser for a long time now.<br />
It is a fundamental part of the web & provides the only real alternative to browsers based on the Google Blink engine.

There are various posts on this site regarding scripts I've written for Firefox both on Linux & on Windows but recent changes have lead me to stop using Firefox completely.

## Negative Changes

- [x] Forcing Pocket
- [x] Pocket Recommendations (Adverts)
- [x] Forcing DNS over HTTPS
- [x] GUI That Looks Like a Webpage

The most recent change which made me question whether to continue to try to fix things was the GUI.

Mozilla released a update which made tabs look like webapp buttons.

Then last week they released version 92.0 changing bookmarks dropdown menus to be huge adding padding & rounded corners.

> I personally don't expect desktop applications to look like someones first time using CSS.

Over time I've built up a `userChrome.css` to fix a lot of changes but as time goes on & Mozilla diverge away from desktop app design I start to question if it's even worth it.

I also have a  custom `prefs.js` disabling many builtin features of Firefox.

### Forced Features

There are various features which seem to have been added & have become enabled by default in Firefox.

#### DoH

This can be detrimental to many users depending on how their network is setup as it bypasses the nameserver set by the network.<br />
This can lead to DNS lookup problems & bypasses any blocking people may have setup (eg: many use dnsmasq with pihole to block adverts & tracking).

There's also the view that forcing users to use a single nameservice creates a central point for monitoring & analytics.

#### Pocket

This is a small thing but it should not be forced onto users.

In addition a default install also has Pocket Recommendations (Adverts) on new tabs (introduced in Firefox 77).

![Firefox 77 Pocket](../../static/media/images/2021/ffox_77_pocket.png)

This feature <a href="https://twitter.com/equilibriumuk/status/1310892618679816192/photo/1" aria-label="equilibriumuk on twitter" target="_blank" rel="noopener noreferrer">is still active with pocket disabled</a>.

### GUI Changes

Huge zoomed urlbar introduced in Firefox 75

![Firefox 75 Search](../../static/media/images/2021/ffox_75_search.png)

Tabs that look like webapp buttons introduced in Firefox 89

Huge bookmarks dropdown with rounded corners introduced in Firefox 92

![Firefox 92 Menus](../../static/media/images/2021/ffox_92_menus.png)

Comparing the two screenshots above you can see that tabs went from square with a color accent above to show active tab to being a rounded button with no color & a smaller close button.

## Conclusion

Some of these things might seem small to many but a large percentage of time on the computer is spent looking at the web browser & there are many other options with better features when it comes to UX & UI design.

I question whether Mozilla see Firefox as a desktop app or a web app as it seems the more changes they make the more their web browser looks like a web app.

As a user I feel like I shouldn't be trying to fix GUI changes over and over so am now testing out alternatives like Brave.

## Firefox Fixes

I have scripts for creating profiles with fixes for most of the GUI changes & settings overrides available on github.

<a class="github" href="https://github.com/equk/ffox_profile_tools" aria-label="View on GitHub" target="_blank" rel="noopener noreferrer"><i class="fa fa-github"></i> ffox_profile_tools</a>

I recently added a fix for the bookmark spacing *(there are still rounded corners on the dropdown so it still looks bad)*.